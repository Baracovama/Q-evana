const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      auth: false,
      username: "",
      id_user: -1,
      details: {},
      pelis: [],
      top: [],
      proxi: [],
      favList: [],
      peliculon: {},
      notfound: false,
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      LogOut: () => {
        localStorage.removeItem("token");
        // getActions().Verify();
        return true;
      },

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
          } else if (resp.status === 404) {
            setStore({
              logeado: data.logeado,
            });
          }
        } catch (error) {
          console.log(error);
        }
      },

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
          return true;
        } catch (error) {
          console.error("There was an error", error);
          return false;
        }
      },

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

      addFavorites: async (datos) => {
        try {
          const response = await fetch(process.env.BACKEND_URL + "/api/addPelisFav", {
            method: "POST",
            body: JSON.stringify(datos),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          return true;

        } catch (error) {
          console.log(error);
          return false;
        }
      },

      listpelis: () => {
        fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es&page="
        )
          .then((res) => res.json())
          .then((data) => setStore({ pelis: data.results }));
      },

      toppelis: () => {
        fetch(
          "https://api.themoviedb.org/3/movie/top_rated?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es&page="
        )
          .then((res) => res.json())
          .then((data) => setStore({ top: data.results }));
      },

      proxpelis: () => {
        fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es&page=4"
        )
          .then((res) => res.json())
          .then((data) => setStore({ proxi: data.results }));
      },

      favPelis: (id_user) => {
        fetch(
          "https://3001-baracovama-qevana-3zwvya53hy8.ws-eu62.gitpod.io/api/favoritos?user_id=" + id_user
        )
          .then((res) => res.json())
          .then((data) => setStore({ favList: data.results }));
      },

      pelicula: () => {
        fetch(
          "https://api.themoviedb.org/3/movie/popular?api_key=4420fdc66e8fbaa810cbb4c5a36fb67c&language=es&page="
        )
          .then((res) => res.json())
          .then((data) => setStore({ peliculon: data.results }));
      },

      setFavorites: (item) => {
        const store = getStore();

        setStore({ favList: [...store.favList, item] });
      },

      deleteFavorites: (item) => {
        const store = getStore();

        setStore({
          favList: store.favList.filter((favList, i) => favList.id !== item.id),
        });
      },

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
    },
  };
};

export default getState;
