const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      auth: false,
      username: "",
      id_user: -1,
      pelis: [],
      top: [],
      proxi: [],
      favList: [],
      generos: [],
      peliculon: [],
      notfound: false,
      genrepage: [],
      user: {},
      search: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      // -------------------------------------------------------------------------
      LogOut: () => {
        localStorage.removeItem("token");
        // getActions().Verify();
        return true;
      },
      // -------------------------------------------------------------------------
      Verify: async () => {
        const opts = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };
        try {
          const resp = await fetch(
            process.env.BACKEND_URL + "/api/verify",
            opts
          );
          const data = await resp.json();
          console.log(data);
          if (resp.status === 200) {
            setStore({
              logeado: data.logeado,
            });
            setStore({
              username: data.username,
            });
            setStore({
              id_user: data.id_user,
            });
            setStore({
              user: data.user,
            });
          } else if (resp.status === 404) {
            setStore({
              logeado: data.logeado,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      // -------------------------------------------------------------------------

      InicioSesion: async (email, password) => {
        console.log(email, password);
        const opts = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/login",
            opts
          );
          const data = await response.json();
          localStorage.setItem("token", data.token);
          setStore({
            auth: true,
          });
          setStore({
            username: data.username,
          });
          setStore({
            id_user: data.id_user,
          });
          setStore({
            user: data.user,
          });
          if (getActions().listpelis() && getActions().toppelis()) {
            return true;
          }
          return false;
        } catch (error) {
          console.error("There was an error", error);
          return false;
        }
      },
      // -------------------------------------------------------------------------

      addDatos: async (datos) => {
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/user", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          localStorage.setItem("token", data.token);
          setStore({
            auth: true,
          });
          setStore({
            username: data.username,
          });
          setStore({
            id_user: data.id_user,
          });
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      // -------------------------------------------------------------------------

      addFavorites: async (id) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/addPelisFav",
            {
              method: "POST",
              body: JSON.stringify({ pelicula_id: id }),
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("token"),
              },
            }
          );
          const data = await response.json();
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      },
      // -------------------------------------------------------------------------

      listpelis: async () => {
        let header = {
          "Content-Type": "application/json",
        };
        if (getStore().auth) {
          header["Authorization"] = "Bearer " + localStorage.getItem("token");
        }
        const result = await fetch(
          `${process.env.BACKEND_URL}/api/peliculas/novedades`,
          {
            method: "GET",
            headers: header,
          }
        );
        const data = await result.json();
        setStore({ pelis: data });
        return true;
      },
      // -------------------------------------------------------------------------

      toppelis: async () => {
        let header = {
          "Content-Type": "application/json",
        };
        if (getStore().auth) {
          header["Authorization"] = "Bearer " + localStorage.getItem("token");
        }
        const result = await fetch(
          `${process.env.BACKEND_URL}/api/peliculas/top`,
          {
            method: "GET",
            headers: header,
          }
        );
        const data = await result.json();
        setStore({ top: data });
        return true;
      },
      // -------------------------------------------------------------------------

      generoslist: async () => {
        const result = await fetch(
          `${process.env.BACKEND_URL}/api/peliculas/generos`
        );
        const data = await result.json();
        setStore({ generos: data });
        return true;
      },
      // -------------------------------------------------------------------------

      pagenre: async (id) => {
        const result = await fetch(
          `${process.env.BACKEND_URL}/api/peliculas/genero/${id}`
        );
        const data = await result.json();
        setStore({ genrepage: data });
        return true;
      },
      // -------------------------------------------------------------------------
      // -------------------------------------------------------------------------
      // -------------------------------------------------------------------------

      details: async (id) => {
        const result = await fetch(
          `${process.env.BACKEND_URL}/api/pelicula/${id}`
        );
        const data = await result.json();
        setStore({ peliculon: data });
        return true;
      },

      // hay que arreglarlo
      // -------------------------------------------------------------------------
      // -------------------------------------------------------------------------
      // -------------------------------------------------------------------------

      favPelis: (id_user) => {
        fetch(process.env.BACKEND_URL + "/api/favoritos", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
          .then((res) => res.json())
          .then((data) => setStore({ favList: data }));
      },
      // -------------------------------------------------------------------------

      searchPelis: (value) => {
        console.log(value);
        const store = getStore();
        const filterPelis = store.pelis.filter(
          (peli, i) =>
            peli.title.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        const filterTop = store.top.filter((peli, i) =>
          peli.title.toLowerCase().includes(value.toLowerCase())
        );
        const filterProxi = store.proxi.filter((peli, i) =>
          peli.title.toLowerCase().includes(value.toLowerCase())
        );
        if (filterPelis.length > 0) {
          setStore({
            pelis: filterPelis,
          });
        } else {
          setStore({
            notfound: false,
          });
        }
        /* else if (filterTop.length > 0) {
          setStore({
            top: filterTop
          });
        } else if (filterProxi.length > 0) {
          setStore({
            proxi: filterProxi
          });
        }*/
      },

      CambiosUser: async (email, username, name, password) => {
        console.log(email, password);
        const opts = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            email: email,
            password: password,
            username: username,
            name: name,
          }),
        };
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/cambiouser",
            opts
          );
          const data = await response.json();
          setStore({
            username: data.username,
          });
          setStore({
            id_user: data.id_user,
          });
        } catch (error) {
          console.error("There was an error", error);
          return false;
        }
      },
      // -------------------------------------------------------------------------

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({
            message: data.message,
          });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      // -------------------------------------------------------------------------

      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({
          demo: demo,
        });
      },

      search: (text) =>
        setStore({
          search: text,
        }),
    },
  };
};

export default getState;
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
