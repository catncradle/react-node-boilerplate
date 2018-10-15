import axios from 'axios'
// import history from '../history'

//actions
const GET_VETS = 'GET_VETS'

//actionCreators
const getVets = vets => ({type: GET_VETS, vets})
//reducer

const initialState = []
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VETS:
      return action.vets
    default:
      return state
  }
}

//thunks
export const fetchVets = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/vets')
    dispatch(getVets(data))
  } catch (err) {
    console.error(err)
  }
}
