import React from 'react';
import { Link } from 'react-router-dom';

import { Map, TileLayer } from 'react-leaflet';
import mapMarkerImg from '../images/Local.svg';

import 'leaflet/dist/leaflet.css';

import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanages-map.css';

export default function OrphanageMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Campo Mourão</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <Map
                center={[-24.0084819, -52.3506948]}
                zoom={15}
                style={{ width: '100%', height:'100%' }}
                
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
            </Map>

            <Link to="" className="create-orphanage"><FiPlus size={26} color="#FFF" /></Link>
        </div>
    );
}