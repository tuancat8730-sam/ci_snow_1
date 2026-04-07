import { useReducer } from 'react'
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
  FORM_RESET,
} from '../action_types/form'
import { submitContactForm } from '../actions'

const initialState = {
  loading: false,
  success: false,
  error: null,
}

function formReducer(state, action) {
  switch (action.type) {
    case FORM_SUBMIT_REQUEST:
      return { ...initialState, loading: true }
    case FORM_SUBMIT_SUCCESS:
      return { ...initialState, success: true }
    case FORM_SUBMIT_ERROR:
      return { ...initialState, error: action.payload }
    case FORM_RESET:
      return initialState
    default:
      return state
  }
}

export function useContactForm() {
  const [state, dispatch] = useReducer(formReducer, initialState)

  const submit = (formData) => submitContactForm(dispatch, formData)
  const reset = () => dispatch({ type: FORM_RESET })

  return { ...state, submit, reset }
}
