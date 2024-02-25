import axios from 'axios'
import { PYTHON_API } from '../../../configs'

export const pokemon = axios.create({
    method: 'GET',
    baseURL: PYTHON_API
})
