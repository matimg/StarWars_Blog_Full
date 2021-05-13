const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personas: [],
			planetas: [],
			persona: [],
			propiedades: [],
			planeta: [],
			detallePlaneta: [],
			favoritos: [],
			btnFavoritos: Array(200).fill("btn btn-outline-warning ml-5")
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				//OBTENGO PERSONAS DESDE API
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ personas: data.results }))
					.catch(err => console.error(err));
				//OBTENGO PLANETAS DESDE API
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planetas: data.results }))
					.catch(err => console.error(err));
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
			},
			getPersona: id => {
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(res => res.json())
					.then(data => setStore({ persona: data.result, propiedades: data.result.properties }))
					.catch(err => console.error(err));
			},
			getPlaneta: id => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(res => res.json())
					.then(data => setStore({ planeta: data.result, detallePlaneta: data.result.properties }))
					.catch(err => console.error(err));
			},
			addFavorito: (nombre, key) => {
				const store = getStore();
				const actions = getActions();
				let element = {
					nombre: nombre,
					key: key
				};
				let favoritosCopy = [...store.favoritos];
				let newBtnFavoritos = [...store.btnFavoritos];
				newBtnFavoritos[key] = "btn btn-warning ml-5";
				let existe = favoritosCopy.includes(element);
				if (!existe) {
					favoritosCopy.push(element);
					setStore({ favoritos: favoritosCopy });
					setStore({ btnFavoritos: newBtnFavoritos });
				} else {
					actions.removeFavorito(element);
				}
			},
			removeFavorito: element => {
				const store = getStore();
				let favoritosCopy = [...store.favoritos];
				let newBtnFavoritos = [...store.btnFavoritos];
				newBtnFavoritos[element.key] = "btn btn-outline-warning ml-5";
				setStore({ favoritos: favoritosCopy.filter(item => item !== element) });
				setStore({ btnFavoritos: newBtnFavoritos });
			}
		}
	};
};

export default getState;
