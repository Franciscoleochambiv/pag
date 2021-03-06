import axios from "axios";
import {
  //GET_CATEGORIAFILE,
  GET_SHOPINGFILES,
  GET_SHOPINGFILE,
  ADD_SHOPINGFILE,
  SHOPINGFILE_LOADING,
  CLEAR_CURRENT_SHOPINGFILE,
  GET_ERRORS,
  UPDATE_SHOPING,
  DELETE_SHOPING,
  BUSCA_SHOPING
} from "./types";



import { unidad } from "../variables";


export const addShoping = (eduData, cate, nimagen, ndata, flag, history) => dispatch => {

  console.log(eduData)
  console.log(ndata)
  console.log("Estes es el valor en acctions")
  axios
    .post(unidad + "/api/shoping1/add", {
      id: ndata,
      name: eduData.descripcion,
      price: eduData.precio,
      description: eduData.contenido,
      categoriaid:cate.id,
      category: cate.descripcion,
      tipodato: flag,
      imagen: nimagen

    })
    .then(res =>
      dispatch({
        type: ADD_SHOPINGFILE,
        payload: res.data
      })
    )
    //.then(res=> history.push("/datatables"))
    //.then(res=> history.push("/view-tipos"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};




export const deleteCurrentShoping = (id) => dispatch => {
  if (window.confirm("Esta Ud Seguro de Eliminar El Registro")) {
    // dispatch(setTiposfileLoading());
    axios
      .delete(unidad + `/api/shoping1/view/${id}`)

      //.then(res => history.push("/view-tipos"))

      .then(res =>
        dispatch({
          type: DELETE_SHOPING,
          payload: id
        })

      )

      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: {}
        })
      );
    //console.log(res)
  };
}


export const updateCurrentShoping = (id, tipoData) => dispatch => {
  if (window.confirm("Esta Ud Seguro de Actualizar El Registro")) {

    console.log("reibiendo datos de Ipodata")
    //
    console.log(tipoData)



    // dispatch(setTiposfileLoading());
    axios
      .put(unidad + `/api/shoping1/viewsql/${id}`, {
        id: tipoData.id,
        name: tipoData.name,
        category: tipoData.category,
        price: tipoData.price,
        description: tipoData.description,
        popular: tipoData.popular,
        imageUrls: tipoData.imageUrls
      })




      .then(res => {
        console.log(tipoData)
        console.log("actualizando con PUT devolviendo datos   ")
        // console.log(res.tipoData)
        // dispatch(setTiposfileLoading());
        dispatch({
          type: UPDATE_SHOPING,
          payload: {            
            id: tipoData.id,
            name: tipoData.name,
            categoriaid: tipoData.category,
            price: tipoData.price,
            description: tipoData.description,
            tipodato: tipoData.popular,
            imagen: tipoData.imageUrls
          }
        })
      }

      )



      //.then(res=> history.push("/view-tipos"))

      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: {}
        })
      );
    //console.log(res)
  };
}

export const buscarCurrentShoping = (id) => dispatch => {

  // dispatch(setTiposfileLoading());
  axios
    .get(unidad + `/api/shoping1/view/${id}`)

    //.then(res => history.push("/view-tipos"))

    .then(res => {
      //  console.log("entrando------------mostrando resultado  ")
      //  console.log(res.data)
      dispatch({
        type: BUSCA_SHOPING,
        payload: res.data
      })
    }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: {}
      })
    );

  //res.json(res);

  //console.log(json(res.data))

}










export const getCurrentShoping = () => dispatch => {
  dispatch(setShopingfileLoading());
  axios
    .get(unidad + "/api/shoping1/viewsql/")
    .then(res =>
      dispatch({
        type: GET_SHOPINGFILES,
        payload: res.data

      })

    )
    .catch(err =>
      dispatch({
        type: GET_SHOPINGFILES,
        payload: {}
      })
    );

};

export const getShopingByHandle = handle => dispatch => {
  dispatch(setShopingfileLoading());
  axios
    .get(unidad + `/api/shoping1/viewsql/${handle}`)
    //.get(`/api/profile/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_SHOPINGFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SHOPINGFILE,
        payload: null
      })
    );
};




export const getShopingByHandle1 = handle => dispatch => {
  dispatch(setShopingfileLoading());
  axios
    .get(unidad + `/api/shoping1/viewcat/${handle}`)
    //.get(unidad+"/api/shoping1/viewcat/Regional")
    .then(res =>
      dispatch({
        type: GET_SHOPINGFILES,
        payload: res.data

      })

    )
    .catch(err =>
      dispatch({
        type: GET_SHOPINGFILES,
        payload: {}
      })
    );



};





export const setShopingfileLoading = () => {
  return {
    type: SHOPINGFILE_LOADING
  };
};

export const clearCurrentShopingfile = () => {
  return {
    type: CLEAR_CURRENT_SHOPINGFILE
  };
};
