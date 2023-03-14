import React from 'react'
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

function Location({bagckroungs, language}) {

        const cordination = {
            lat: 41.366659,
            lng: 69.286500,
            zoom: 20
        }

    const position = [cordination.lat, cordination.lng];

    return (
        <div className="locationDisplay" style={bagckroungs} >
            <div className="heading">
                <h2 style={bagckroungs}>
                    {language ? 'LOCATION' : 'МЕСТО РАСПОЛОЖЕНИЯ'}
                </h2>
            </div>
                <MapContainer className="locationMap" style={{
                    maxWidth: '605px',
                    width: '100%',
                    height: '350px'
                }} center={position} zoom={cordination.zoom}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
                
                <div className="right-location"> 
                        <div className="row">
                            <h2>{language ? 'We work all over the world.' : 'Работаем по всему миру.'}</h2>
                        </div>
                    <div className="locationLists">
                        <div className="location_info">
                            <h2>
                            {language ? 'Tashkent' : 'Ташкент'}
                            </h2>
                            <h3>
                            {language ? 'Yunusabad, Amir Temur Street' : 'Юнусабад, Улица Амир Темура'}
                            </h3>
                            <h3>
                            {language ? 'Stroycenter, 2nd floor' : 'Stroycenter, 2-этаж'}
                            </h3>
                        </div>
                        <div className="location_info">
                            <h2>
                            {language ? 'Saint Petersburg' : 'Санкт Петербург'}
                            </h2>
                            <h3>
                            {language ? 'Academician Pavlova 5A' : 'Академика павлова 5А'}
                            </h3>
                            <h3>
                            {language ? 'River House 2nd floor' : 'River House 2-этаж'}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Location
