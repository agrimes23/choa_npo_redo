import Map from '../components/Maps'
import { locationAndWaitTimes } from '@/data/locationAndWaitTimes'

const mapLocations = () => {
    console.log(locationAndWaitTimes)
    return (
        <>
            <h1>Locations</h1>
            {/* <Map/> */}
        </>
    )
}

export default mapLocations;