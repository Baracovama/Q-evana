const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            auth: false,
            username: "",
            detail: {},

        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            LogOut: () => {
                localStorage.removeItem("token");
                return true
            },

            Verify: () => {
                const opts = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                };

                fetch(process.env.BACKEND_URL + "/api/verify", opts)
                    .then((resp) => {
                        console.log(resp);
                        if (resp.status === 200) return resp.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            logeado: data.logeado
                        });
                        setStore({
                            username: data.username
                        });
                    })
                    .catch((error) => {
                        console.error("There was an error", error);
                    });
            },

            InicioSesion: async (email, password) => {
                console.log(email, password);
                const opts = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                };
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/login", opts)
                    const data = await response.json()
                    localStorage.setItem("token", data.token);
                    setStore({
                        auth: true
                    });
                    setStore({
                        username: data.username
                    });
                    return true
                } catch (error) {
                    console.error("There was an error", error);
                    return false
                };
            },

            addDatos: async (datos) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/user", {
                        method: "POST",
                        body: JSON.stringify(datos),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    })
                    const data = response.json();
                    localStorage.setItem("token", data.token);
                    setStore({
                        auth: true
                    });
                    setStore({
                        username: data.username
                    });
                    return true
                } catch (error) {
                    console.log(error);
                    return false
                };
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({
                        message: data.message
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
                    demo: demo
                });
            },
        },
    };
};

export default getState;