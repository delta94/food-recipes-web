// URL e PORTA base vinda da aplicação API

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3333'
export default baseURL

export let baseURLImages: string

if (process.env.REACT_APP_STORAGE_TYPE === 's3') {
  baseURLImages = process.env.REACT_APP_BASE_IMG_URL as string
} else {
  baseURLImages = `${baseURL}/files`
}
