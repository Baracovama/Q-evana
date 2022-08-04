const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			auth:false,
			username:""
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			InicioSesion: (email, password) => {
				console.log(email, password)
				const opts = {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
					  email: email,
					  password: password,
					}),
				  };
			  
				  fetch(process.env.BACKEND_URL + "/api/login", opts)
					.then((resp) => {
						console.log(resp)
					  if (resp.status === 200) return resp.json();
					  else alert("Error");
					})
					.then((data) => {
					  console.log(data);
					  localStorage.setItem("token", data.token);
					  setStore({auth:true})
					  setStore({username:data.username})
					})
					.catch((error) => {
					  console.error("There was an error", error);
					})
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
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
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
