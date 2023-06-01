import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

interface GetLocationType {
  city: string
  state: string
}

interface GetLocationContextProps {
  children: ReactNode
}

const GetLocationContext = createContext({} as GetLocationType)

export function GetLocationProvider({ children }: GetLocationContextProps) {
  const [state, setState] = useState('')
  const [city, setCity] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords

      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAsw0IpGdAPPWHnCpsBWn6ERQ1x13xjFTc`,
      )
        .then((response) => response.json())
        .then((data) => {
          setCity(data.results[0].address_components[3].long_name)
          setState(data.results[0].address_components[4].short_name)
        })
    })
  }, [])

  return (
    <GetLocationContext.Provider value={{ city, state }}>
      {children}
    </GetLocationContext.Provider>
  )
}

export function useGetLocation() {
  const context = useContext(GetLocationContext)
  return context
}
