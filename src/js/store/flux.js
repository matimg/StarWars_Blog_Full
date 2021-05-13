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
			btnFavoritos: Array(200).fill("btn btn-outline-warning ml-5"),
			loading: false,
			personajesImg: [
				"https://i2.wp.com/www.lafosadelrancor.com/wp-content/uploads/2021/02/luke-retorno-de-jedi-lista-cortada_widelg.jpg?resize=678%2C381&ssl=1",
				"https://www.alfabetajuega.com/multimedia/imagenes/201703/183307.alfabetajuega-c3po.jpg",
				"https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/05/03/15885120366138.jpg",
				"https://imagenes.milenio.com/WHCg8mdgTozT47y-UTxiUJHAQ_Q=/958x596/https://www.milenio.com/uploads/media/2020/07/16/la-subasta-se-realizara-el_44_14_831_517.jpg",
				""
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				//OBTENGO PERSONAS DESDE API
				const store = getStore();
				setStore({ loading: true });
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ personas: data.results }))
					.catch(err => console.error(err));
				//OBTENGO PLANETAS DESDE API
				fetch("https://www.swapi.tech/api/planets")
					.then(res => res.json())
					.then(data => setStore({ planetas: data.results, loading: false }))
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
				const store = getStore();
				setStore({ loading: true });
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(res => res.json())
					.then(data =>
						setStore({ persona: data.result, propiedades: data.result.properties, loading: false })
					)
					.catch(err => console.error(err));
			},
			getPlaneta: id => {
				const store = getStore();
				setStore({ loading: true });
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(res => res.json())
					.then(data =>
						setStore({ planeta: data.result, detallePlaneta: data.result.properties, loading: false })
					)
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
				let existe = favoritosCopy.some(element => element.key == key);
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
				setStore({ favoritos: favoritosCopy.filter(item => item.key !== element.key) });
				setStore({ btnFavoritos: newBtnFavoritos });
			}
		}
	};
};

export default getState;
