/**
 * co = Carbon Monoxide (μg/m3)
 * o3 = Ozone (μg/m3)
 * no2 = Nitrogen dioxide (μg/m3)
 * so2 = Sulphur dioxide (μg/m3)
 * pm2_5 = PM2.5 (μg/m3)
 * pm10 = PM10 (μg/m3)
 * us-epa-index = 
 *  1 = GOOD
 *  2 = Moderate
 *  3 = Unhealthy for sensitive group
 *  4 = Unhealthy
 *  5 = Very Unhealthy
 *  6 = Hazardous
 * gb-defra-index = UK Defra Index (See table below)
 */

export const getBackgroundAirQuality = (val: number) => {
  switch (val) {
    case 1:
      return 'bg-color-green';
    case 2:
      return 'bg-color-yellow';
    case 3:
      return 'bg-color-deeporange'
    case 4:
      return 'bg-color-pink'
    case 5:
      return 'bg-color-red'
    case 6:
      return 'bg-color-purple'
    default:
      return '-'
  }
}

export const usEPAIndexTranslator = (val: number): string => {
  switch (val) {
    case 1:
      return 'Good';
    case 2:
      return 'Moderate';
    case 3:
      return 'Unhealthy'
    case 4:
      return 'Unhealthy'
    case 5:
      return 'Very Unhealthy'
    case 6:
      return 'Hazardous'
    default:
      return '-'
  }
}

export const gbDefraIndexTranslator = (val: number): { band: string, gm: string } => {
  switch (val) {
    case 1:
      return {
        band: 'Low',
        gm: '0-11'
      };
    case 2:
      return {
        band: 'Low',
        gm: '12-23'
      };
    case 3:
      return {
        band: 'Low',
        gm: '24-35'
      };
    case 4:
      return {
        band: 'Moderate',
        gm: '36-41'
      };
    case 5:
      return {
        band: 'Moderate',
        gm: '42-47'
      };
    case 6:
      return {
        band: 'Moderate',
        gm: '48-53'
      };
    case 7:
      return {
        band: 'High',
        gm: '54-58'
      };
    case 8:
      return {
        band: 'Moderate',
        gm: '59-64'
      };
    case 9:
      return {
        band: 'High',
        gm: '65-70'
      };
    case 10:
      return {
        band: 'Very High',
        gm: '71 or more'
      };
    default:
      return {
        band: '-',
        gm: '-',
      }
  }
}