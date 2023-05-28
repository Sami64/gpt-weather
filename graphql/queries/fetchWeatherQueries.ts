import { gql } from '@apollo/client';

const fetchWeatherQuery = gql`
	query MyQuery(
		$latitude: String!
		$longitude: String!
		$timezone: String!
		$current_weather: String
		$daily: String = "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max"
		$hourly: String = "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,windgusts_10m,uv_index,uv_index_clear_sky"
	) {
		myQuery(
			current_weather: $current_weather
			daily: $daily
			latitude: $latitude
			longitude: $longitude
			hourly: $hourly
			timezone: $timezone
		) {
			elevation
			generationtime_ms
			latitude
			longitude
			timezone
			timezone_abbreviation
			utc_offset_seconds
			current_weather {
				temperature
				time
				weathercode
				winddirection
				windspeed
			}
			daily {
				time
				weathercode
				temperature_2m_max
				temperature_2m_min
				uv_index_clear_sky_max
				uv_index_max
				apparent_temperature_max
				apparent_temperature_min
				sunrise
				sunset
			}
			daily_units {
				time
				weathercode
				apparent_temperature_max
				apparent_temperature_min
				sunrise
				sunset
				temperature_2m_max
				temperature_2m_min
				uv_index_clear_sky_max
				uv_index_max
			}
			hourly {
				apparent_temperature
				precipitation
				precipitation_probability
				rain
				relativehumidity_2m
				showers
				temperature_2m
				time
				uv_index
				uv_index_clear_sky
				windgusts_10m
				snow_depth
				snowfall
			}
			hourly_units {
				apparent_temperature
				precipitation
				precipitation_probability
				rain
				relativehumidity_2m
				showers
				temperature_2m
				time
				snow_depth
				snowfall
				uv_index
				uv_index_clear_sky
				windgusts_10m
			}
		}
	}
`;

export default fetchWeatherQuery;
