'use client'
import Map from 'react-map-gl/mapbox'
import React from 'react'
import {Pin} from "@/app/(index)/Pin";

export default function Home() {

	const [points] = React.useState([
		{ lat: 35.332, lng: -106.652 },
		{ lat: 35.339, lng: -106.656 },
		{ lat: 35.40, lng: -106.666 },
		{ lat: 35.23, lng: -106.4444 }
	])
	return (
		<>
			<div className="container mx-auto my-4 flex justify-center items-center flex-col">
				<h1 className="text-4xl font-bold text-center">Here is the Map</h1>
				<div className='my-6'>
					<Map
						initialViewState={{
							latitude: 35.33,
							longitude: -106.65,
							zoom: 9
						}}
						mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
						style={{ width: 600, height: 400 }}
						mapStyle="mapbox://styles/mapbox/dark-v9"
					>
						{points.map((point, index) => <Pin lat={point.lat} lng={point.lng} index={index} key={index}/>)}
					</Map>
				</div>
			</div>
		</>
	)
}