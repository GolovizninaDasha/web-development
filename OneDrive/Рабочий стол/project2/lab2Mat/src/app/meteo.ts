export interface Meteo {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: Hourlyunits;
  hourly: Hourly;
}

interface Hourly {
  time: string[];
  temperature_2m: number[];
}

interface Hourlyunits {
  time: string;
  temperature_2m: string;
}
export interface Time2Temperature{
    time: string;
    temperature: (null | number);
    }