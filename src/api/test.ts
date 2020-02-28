import Coco from './axios.config'

export const ApiTest = () => {
  return Coco.get(
    '/api/test',
    {
      params: {
        ID: 12345
      }
    }
  )
}
