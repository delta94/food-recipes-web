// URL e PORTA base vinda da aplicação API

const baseURL = process.env.REACT_APP_BASE_URL || 'http://localhost:3333'
export default baseURL

export let baseURLImages: string

if (process.env.REACT_APP_STORAGE_TYPE === 's3') {
  baseURLImages = 'https://food-recipes-api-1.s3.amazonaws.com'
} else {
  baseURLImages = `${baseURL}/files`
}
