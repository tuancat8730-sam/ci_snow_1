import axios from 'axios'
import {
  FORM_SUBMIT_REQUEST,
  FORM_SUBMIT_SUCCESS,
  FORM_SUBMIT_ERROR,
} from '../action_types/form'

const FORM_ENDPOINT = 'https://api.capitalirrigation.com/api/snow_submit_form/'

export async function submitContactForm(dispatch, formData) {
  dispatch({ type: FORM_SUBMIT_REQUEST })
  try {
    await axios.post(FORM_ENDPOINT, formData, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_FORM_KEY || '',
      },
    })
    dispatch({ type: FORM_SUBMIT_SUCCESS })
  } catch (err) {
    const message =
      err?.response?.data?.message ||
      err?.message ||
      'Something went wrong. Please try again.'
    dispatch({ type: FORM_SUBMIT_ERROR, payload: message })
  }
}
