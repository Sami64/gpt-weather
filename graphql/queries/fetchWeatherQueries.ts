import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
	query MyQuery(
		$current_weather: String
		$daily: String = "weathercode"
		$hourly: String = "temperature_2m,precipitation,precipitation_probability,relativehumidity_2m"
		$latitude: String!
		$longitude: String!
		$timezone: String!
	) {
		myQuery(
			current_weather: $current_weather
			daily: $daily
			hourly: $hourly
			latitude: $latitude
			longitude: $longitude
			timezone: $timezone
		) {
			elevation
			generationtime_ms
			current_weather {
				is_day
				temperature
				time
				weathercode
				windspeed
				winddirection
			}
			daily {
				time
				weathercode
			}
			daily_units {
				time
				weathercode
			}
			latitude
			longitude
			timezone
			timezone_abbreviation
			utc_offset_seconds
			hourly {
				apparent_temperature
				is_day
				dewpoint_2m
				precipitation
				precipitation_probability
				rain
				relativehumidity_2m
				showers
				temperature_2m
				time
			}
			hourly_units {
				apparent_temperature
				dewpoint_2m
				is_day
				precipitation
				precipitation_probability
				rain
				relativehumidity_2m
				showers
				temperature_2m
				time
			}
		}
	}
`;

export default fetchWeatherQuery;
