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
				"https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_92d422b0.jpeg?region=304%2C0%2C1778%2C1000&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/c-3po-main_417a2902.jpeg?region=176%2C0%2C951%2C536&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_86916bb6.jpeg?region=304%2C0%2C1778%2C1000&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/leia-organa-feature-image_d0f5e953.jpeg?region=0%2C0%2C1280%2C720&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/databank_owenlars_01_169_effce0f8.jpeg?region=0%2C0%2C1560%2C878&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C0%2C1560%2C878&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=374%2C0%2C1186%2C666&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C878&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpeg?region=0%2C0%2C1536%2C864&width=768"
			],
			planetasImg: [
				"https://lumiere-a.akamaihd.net/v1/images/tatooine-main_127c43c7.jpeg?region=164%2C0%2C953%2C536&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/databank_alderaan_01_169_4a5264e2.jpeg?region=0%2C0%2C1560%2C878&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/databank_yavin4_01_169_b6945e20.jpeg?region=0%2C0%2C1560%2C878&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/Hoth_d074d307.jpeg?region=0%2C0%2C1200%2C675&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/Dagobah_890df592.jpeg?region=0%2C80%2C1260%2C711&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/Bespin_2d0759aa.jpeg?region=0%2C0%2C1560%2C878&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/databank_endor_01_169_68ba9bdc.jpeg?region=0%2C0%2C1560%2C878&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/databank_naboo_01_169_6cd7e1e0.jpeg?region=0%2C0%2C1560%2C878&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/Coruscant_03db43b4.jpeg?region=0%2C0%2C1536%2C864&width=768",
				"https://lumiere-a.akamaihd.net/v1/images/kamino-main_3001369e.jpeg?region=158%2C0%2C964%2C542&width=768"
			],
			usuarioActual: null
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			login: async (mail, pass) => {
				var myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				var raw = JSON.stringify({
					email: mail,
					password: pass
				});

				var requestOptions = {
					method: "POST",
					headers: myHeaders,
					body: raw
				};

				const resLogin = await fetch(process.env.BACKEND_URL + "/login", requestOptions);
				const data = await resLogin.json();
				console.log(data);
				sessionStorage.setItem("token", data.token);
				setStore({ usuarioActual: data.user });
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
