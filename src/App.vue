<template>
  <div
    id="app"
    class="nocursor"
    v-shortkey="{
      caption: ['ctrl', 'c'],
      dat: ['ctrl', 'u'],
    }"
    @shortkey="shortcuts"
  >
    <keep-alive>
      <div v-if="showDat">
        <dat-gui
          closeText="Close controls"
          openText="Open controls"
          closePosition="bottom"
          class="dat-gui-ui"
          closed="true"
        >
          <!-- <dat-folder label="Keyboard Shortcuts">
            <p class="dat-meta">
              cntrl-c to toggle caption.<br />
              cntrl-u to toggle parameters<br />
            </p>
          </dat-folder> -->

          <dat-folder label="Map Properties">
            <dat-boolean v-model="mapCountryLabels" label="Country Labels" />
            <dat-boolean v-model="mapCityLabels" label="City Labels" />
            <dat-number
              v-model="mapCountryLineWidth"
              :min="0"
              :max="4"
              :step="0.1"
              label="Country Line Width"
            />

            <dat-number
              v-model="mapCountryLineOpacity"
              :min="0"
              :max="1"
              :step="0.01"
              label="Country Line Opacity"
            />

            <!-- <dat-number
              v-model="mapRoadsOpacity"
              :min="0"
              :max="1"
              :step="0.01"
              label="Road Opacity"
            /> -->

            <dat-color v-model="mapLandColor" label="Land Color" />
            <dat-number
              v-model="mapLandOpacity"
              :min="0"
              :max="1"
              :step="0.01"
              label="Land Opacity"
            />
            <dat-color v-model="mapWaterColor" label="Ocean Color" />
            <dat-number
              v-model="mapWaterOpacity"
              :min="0"
              :max="1"
              :step="0.005"
              label="Ocean Opacity"
            />

            <dat-color v-model="mapLakeColor" label="Lake Color" />
            <dat-number
              v-model="mapLakeOpacity"
              :min="0"
              :max="1"
              :step="0.005"
              label="Lake Opacity"
            />
            <dat-number
              v-model="mapSatelliteOpacity"
              :min="0"
              :max="1"
              :step="0.005"
              label="Satellite Opacity"
            />
            <dat-select
              v-model="compositeSelected"
              :items="compositeOptions"
              label="Composite Operation"
            />
          </dat-folder>

          <dat-folder label="Birds">
            <dat-boolean v-model="birdsOn" label="Display Layer" />
            <dat-color v-model="birdsColor" label="Birds Color" />

            <dat-number
              v-model="birdsActive.VELOCITY_SCALE"
              :min="0"
              :max="1"
              :step="0.01"
              label="Velocity Scale"
            />
            <!-- <dat-number
            v-model="birdsActive.INTENSITY_SCALE_STEP"
            :min="0"
            :max="100"
            :step="5"
            label="Intensity Scale Step"
          />
          <dat-number
            v-model="birdsActive.MAX_WIND_INTENSITY"
            :min="0"
            :max="100"
            :step="5"
            label="Max Wind Intensity"
          /> -->
            <dat-number
              v-model="birdsActive.MAX_PARTICLE_AGE"
              :min="0"
              :max="200"
              :step="1"
              label="Max Particle Age"
            />
            <dat-number
              v-model="birdsActive.PARTICLE_LINE_WIDTH"
              :min="0"
              :max="6"
              :step="0.1"
              label="Particle Line Width"
            />
            <dat-number
              v-model="birdsActive.PARTICLE_MULTIPLIER"
              :min="0"
              :max="2"
              :step="0.05"
              label="Particle Multiplier"
            />
            <dat-number
              v-model="birdsActive.FADE_TRANSPARENCY"
              :min="0"
              :max="1"
              :step="0.01"
              label="Fade Transparency"
            />
            <dat-number
              v-model="birdsActive.COLOR_ALPHA"
              :min="0"
              :max="1"
              :step="0.01"
              label="Color Alpha"
            />
            <!-- <dat-number
            v-model="birdsActive.FRAME_RATE"
            :min="0"
            :max="60"
            :step="1"
            label="Frame Rate"
          /> -->
          </dat-folder>

          <dat-folder label="Mammals">
            <dat-boolean v-model="mammalsOn" label="Display Layer" />
            <dat-color v-model="mammalsColor" label="Mammals Color" />

            <dat-number
              v-model="mammalsActive.VELOCITY_SCALE"
              :min="0"
              :max="1"
              :step="0.01"
              label="Velocity Scale"
            />
            <!-- <dat-number
            v-model="mammalsActive.INTENSITY_SCALE_STEP"
            :min="0"
            :max="100"
            :step="5"
            label="Intensity Scale Step"
          />
          <dat-number
            v-model="mammalsActive.MAX_WIND_INTENSITY"
            :min="0"
            :max="100"
            :step="5"
            label="Max Wind Intensity"
          /> -->
            <dat-number
              v-model="mammalsActive.MAX_PARTICLE_AGE"
              :min="0"
              :max="200"
              :step="1"
              label="Max Particle Age"
            />
            <dat-number
              v-model="mammalsActive.PARTICLE_LINE_WIDTH"
              :min="0"
              :max="6"
              :step="0.1"
              label="Particle Line Width"
            />
            <dat-number
              v-model="mammalsActive.PARTICLE_MULTIPLIER"
              :min="0"
              :max="2"
              :step="0.05"
              label="Particle Multiplier"
            />
            <dat-number
              v-model="mammalsActive.FADE_TRANSPARENCY"
              :min="0"
              :max="1"
              :step="0.01"
              label="Fade Transparency"
            />
            <dat-number
              v-model="mammalsActive.COLOR_ALPHA"
              :min="0"
              :max="1"
              :step="0.01"
              label="Color Alpha"
            />
            <!-- <dat-number
            v-model="mammalsActive.FRAME_RATE"
            :min="0"
            :max="60"
            :step="1"
            label="Frame Rate"
          /> -->
          </dat-folder>

          <dat-folder label="Amphibians">
            <dat-boolean v-model="amphibsOn" label="Display Layer" />
            <dat-color v-model="amphibsColor" label="Amphibs Color" />

            <dat-number
              v-model="amphibsActive.VELOCITY_SCALE"
              :min="0"
              :max="1"
              :step="0.01"
              label="Velocity Scale"
            />
            <!-- <dat-number
            v-model="amphibsActive.INTENSITY_SCALE_STEP"
            :min="0"
            :max="100"
            :step="5"
            label="Intensity Scale Step"
          />
          <dat-number
            v-model="amphibsActive.MAX_WIND_INTENSITY"
            :min="0"
            :max="100"
            :step="5"
            label="Max Wind Intensity"
          /> -->
            <dat-number
              v-model="amphibsActive.MAX_PARTICLE_AGE"
              :min="0"
              :max="200"
              :step="1"
              label="Max Particle Age"
            />
            <dat-number
              v-model="amphibsActive.PARTICLE_LINE_WIDTH"
              :min="0"
              :max="6"
              :step="0.1"
              label="Particle Line Width"
            />
            <dat-number
              v-model="amphibsActive.PARTICLE_MULTIPLIER"
              :min="0"
              :max="2"
              :step="0.05"
              label="Particle Multiplier"
            />
            <dat-number
              v-model="amphibsActive.FADE_TRANSPARENCY"
              :min="0"
              :max="1"
              :step="0.01"
              label="Fade Transparency"
            />
            <dat-number
              v-model="amphibsActive.COLOR_ALPHA"
              :min="0"
              :max="1"
              :step="0.01"
              label="Color Alpha"
            />
            <!-- <dat-number
            v-model="amphibsActive.FRAME_RATE"
            :min="0"
            :max="60"
            :step="1"
            label="Frame Rate"
          /> -->
          </dat-folder>
        </dat-gui>
      </div>
    </keep-alive>

    <div id="viz-meta" v-if="showCaption">
      <h1>Migrations <br class="title-break" />In Motion</h1>
      <!-- <div v-html="activeContent"></div> -->
      <div v-for="c in content" :key="c.step">
        <div v-html="c.text"></div>
      </div>
    </div>

    <div
      style="display:initial"
      class="wind-map-container nocursor"
      id="windContainerbirds"
      v-bind:class="{ hide: !birdsOn }"
    ></div>

    <div
      style="display:initial"
      class="wind-map-container nocursor"
      id="windContainermammals"
      v-bind:class="{ hide: !mammalsOn }"
    ></div>

    <div
      style="display:initial"
      class="wind-map-container nocursor"
      id="windContaineramphibs"
      v-bind:class="{ hide: !amphibsOn }"
    ></div>

    <div class="mapbox-map-container nocursor">
      <div id="map" class="nocursor"></div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Windy } from '@/modules/windy.js';

// import './windy.js';

export default {
  name: 'App',
  data: function() {
    return {
      showCaption: true,
      showDat: true,
      mapSatelliteOpacity: 0,
      map: {},
      mapLandColor: '#000000',
      mapLandOpacity: 1,
      mapWaterColor: '#ffffff',
      mapWaterOpacity: 1,
      mapLakeColor: '#a3bbc7',
      mapLakeOpacity: 0,
      mapCountryLineColor: '#ffffff',
      mapCountryLineWidth: 1,
      mapCountryLineOpacity: 1,
      mapCountryLabels: true,
      mapCityLabels: true,
      mapRoadsOpacity: 0,
      activeScenario: 'scene1',
      amphibsOn: true,
      amphibsColor: '#fcfa47',
      amphibsActive: {},
      amphibsActive2: {},
      birdsOn: true,
      birdsColor: '#47d4fc',
      birdsActive: {},
      birdsActive2: {},
      mammalsOn: true,
      mammalsColor: '#fc47dc',
      mammalsActive: {},
      mammalsActive2: {},
      titleFontSize: 75,
      zoomWidth: {
        default: 1.5,
        z2: 1.5,
        z3: 1.3,
        z4: 1,
        z5: 0.7,
        z6: 0.6,
        z7: 0.2,
      },
      compositeOptions: [
        { name: 'source-over', value: 'source-over' },
        { name: 'source-atop', value: 'source-atop' },
        { name: 'source-in', value: 'source-in' },
        { name: 'source-out', value: 'source-out' },
        { name: 'destination-over', value: 'destination-over' },
        { name: 'destination-atop', value: 'destination-atop' },
        { name: 'destination-in', value: 'destination-in' },
        { name: 'destination-out', value: 'destination-out' },
        { name: 'lighter', value: 'lighter' },
        { name: 'copy', value: 'copy' },
        { name: 'xor', value: 'xor' },
        { name: 'multiply', value: 'multiply' },
        { name: 'screen', value: 'screen' },
        { name: 'overlay', value: 'overlay' },
        { name: 'darken', value: 'darken' },
        { name: 'lighten', value: 'lighten' },
        { name: 'color-dodge', value: 'color-dodge' },
        { name: 'color-burn', value: 'color-burn' },
        { name: 'hard-light', value: 'hard-light' },
        { name: 'soft-light', value: 'soft-light' },
        { name: 'difference', value: 'difference' },
        { name: 'exclusion', value: 'exclusion' },
        { name: 'hue', value: 'hue' },
        { name: 'saturation', value: 'saturation' },
        { name: 'color', value: 'color' },
        { name: 'luminosity', value: 'luminosity' },
      ],
      compositeSelected: 'destination-in',
      default: {
        zoomWidth: {
          default: 0.9,
          z2: 0.8,
          z3: 0.9,
          z4: 1,
          z5: 0.4,
          z6: 0.05,
          z7: 0.05,
        },
      },
      config: {
        scene1: {
          amphibs: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 50, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.2, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#fcfa47', // blue
            COLOR_ALPHA: 0.9,
            COMPOSITE_OPERATION: 'destination-in',
            spData: 'data/perlin8_5_2_direction.json',
            spName: 'amphibs',
            sceneName: 'perlin land + water',
          },
          birds: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 25, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.2, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#47d4fc', // blue
            COLOR_ALPHA: 0.9,
            COMPOSITE_OPERATION: 'destination-in',
            spData: 'data/perlin4_4_1_direction.json',
            spName: 'birds',
          },
          mammals: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 25, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.2, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#fc47dc', // blue
            COLOR_ALPHA: 0.9,
            COMPOSITE_OPERATION: 'destination-in',
            spData: 'data/perlin16_3_4_direction.json',
            spName: 'mammals',
          },
        },
        scene2: {
          amphibs: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 25, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#fcfa47', // blue
            COLOR_ALPHA: 0.9,
            spData: 'data/perlin_8_west.json',
            spName: 'amphibs',
          },
          birds: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 25, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#47d4fc', // blue
            COLOR_ALPHA: 0.9,
            spData: 'data/perlin_4_west.json',
            spName: 'birds',
          },
          mammals: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 25, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#fc47dc', // blue
            COLOR_ALPHA: 0.9,
            spData: 'data/perlin_16_west.json',
            spName: 'mammals',
          },
        },
        scene4: {
          amphibs: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 25, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#fcfa47', // blue
            COLOR_ALPHA: 0.9,
            // spData: 'data/perlin_8_west.json',
            spData: 'data/perlin_8_5_rd_direction.json',
            spName: 'amphibs',
            sceneName: 'perlin land only',
          },
          birds: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 25, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#47d4fc', // blue
            COLOR_ALPHA: 0.9,
            // spData: 'data/perlin_4_west.json',
            spData: 'data/perlin4_4_1_r_direction.json',
            spName: 'birds',
          },
          mammals: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 25, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 2.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.7,
            COLOR_RAMP: '#fc47dc', // blue
            COLOR_ALPHA: 0.9,
            // spData: 'data/perlin_16_west.json',
            spData: 'data/perlin16_3_4_m_r_direction.json',
            spName: 'mammals',
          },
        },
        scene5: {
          amphibs: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 0.7, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.98,
            COLOR_RAMP: '#fcfa47', // blue
            COLOR_ALPHA: 0.95,
            spData: 'data/amphibs_mag.json',
            spName: 'amphibs',
          },
          birds: {
            VELOCITY_SCALE: 0.15, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 0.7, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.98,
            COLOR_RAMP: '#47d4fc', // blue
            COLOR_ALPHA: 0.95,
            spData: 'data/birds_direction.json',
            spName: 'birds',
          },
          mammals: {
            VELOCITY_SCALE: 0.15, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 0.7, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.98,
            COLOR_RAMP: '#fc47dc', // blue
            COLOR_ALPHA: 0.95,
            spData: 'data/mammals_mag.json',
            spName: 'mammals',
          },
        },
        scene6: {
          amphibs: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 0.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.96,
            COLOR_RAMP: '#fcfa47', // blue
            COLOR_ALPHA: 1,
            spData: 'data/amphibs_mag.json',
            spName: 'amphibs',
          },
          birds: {
            VELOCITY_SCALE: 0.15, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 0.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.96,
            COLOR_RAMP: '#47d4fc', // blue
            COLOR_ALPHA: 1,
            spData: 'data/birds_direction.json',
            spName: 'birds',
          },
          mammals: {
            VELOCITY_SCALE: 0.15, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 0.5, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.3, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.96,
            COLOR_RAMP: '#fc47dc', // blue
            COLOR_ALPHA: 1,
            spData: 'data/mammals_mag.json',
            spName: 'mammals',
          },
        },
        scene7: {
          amphibs: {
            VELOCITY_SCALE: 0.03, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 1.3, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.4, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.98,
            COLOR_RAMP: '#fcfa47', // blue
            COLOR_ALPHA: 0.95,
            spData: 'data/amphibs_mag.json',
            spName: 'amphibs',
          },
          birds: {
            VELOCITY_SCALE: 0.15, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 1.3, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.4, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.98,
            COLOR_RAMP: '#47d4fc', // blue
            COLOR_ALPHA: 0.95,
            spData: 'data/birds_direction.json',
            spName: 'birds',
          },
          mammals: {
            VELOCITY_SCALE: 0.15, // scale for wind velocity (completely arbitrary--this value looks nice)
            INTENSITY_SCALE_STEP: 10, // step size of particle intensity color scale
            MAX_WIND_INTENSITY: 40, // wind velocity at which particle intensity is maximum (m/s)
            MAX_PARTICLE_AGE: 100, // higher = flow things out and gets wirey. 50
            PARTICLE_LINE_WIDTH: 1.3, // line width of a drawn particle 1.5
            PARTICLE_MULTIPLIER: 0.4, // particle count scalar (completely arbitrary--this values looks nice) 500
            FRAME_RATE: 60, // desired milliseconds per frame
            NULL_WIND_VECTOR: [NaN, NaN, null], // singleton for no wind in the form: [u, v, magnitude]
            FADE_TRANSPARENCY: 0.98,
            COLOR_RAMP: '#fc47dc', // blue
            COLOR_ALPHA: 0.95,
            spData: 'data/mammals_mag.json',
            spName: 'mammals',
          },
        },
      },
      content: [
        {
          step: 1,
          text:
            '<p>As climate change alters habitats and disrupts ecosystems, where will animals move to survive? And will human development prevent them from getting there?</p> <p>This map shows the average direction mammals, birds, and amphibians need to move to track hospitable climates as they shift across the landscape.</p>',
        },
        {
          step: 2,
          text:
            '<h2>How?</h2><p>Researchers from University of Washington and The Nature Conservancy modeled potential habitat for 2954 species using climate change projections and the climatic needs of each species.</p> <p>Using flow models from <a href="https://www.circuitscape.org/" target="_blank">electronic circuit theory</a>, they plotted movement routes for each species, connecting current habitats with their projected locations under climate change.</p>',
        },
        {
          step: 3,
          text:
            '<h2>What Can We Do?</h2> <p>There are a number of ways that conservationists and land managers can <a href="https://blog.nature.org/science/2016/06/29/species-on-the-move-mapping-barriers-for-wildlife-in-a-warming-world/?utm_source=cgs&utm_medium=alsoin&utm_campaign=migrations" target="_blank">re-build or maintain connectivity</a> to improve species’ ability to adapt to warmer temperatures. Removing fencing, adding wildlife overpasses (or underpasses) to major roadways, and better routing of infrastructure like pipelines and powerlines can all help re-connect areas fragmented by human development.</p>',
        },
        {
          step: 4,
          text:
            '<h2>So...</h2> <p><strong>Q: Does this mean 3000 species will move through my backyard because of climate change?</strong></p><p><strong>A:</strong> No, the researchers used coarse 50 km data, which is good for understanding the big picture view, but not good for understanding local patterns.</p>',
        },
        {
          step: 5,
          text:
            "<h2>Credits</h2><p>This map was created by <a href='https://twitter.com/dan_majka' target='_blank'>Dan Majka</a>, who works for The Nature Conservancy's North America Region science team.</p><p>This work would have not been possible without the <a href='https://blog.nature.org/science/2018/04/26/innovation-for-conservation-brad-mcrae-1966-2017/' target='_blank'>pioneering connectivity science of Brad McRae (1966-2017).</p>",
        },
        {
          step: 7,
          text:
            '<h2>References</h2><p>Lawler, JJ, et al. 2013. <a href="Lawler.2013.EcolLettersClimateRoutes.pdf" target="_blank">Projected climate-driven faunal movement routes</a>. Ecology Letters 16(8): 1014-1022. </p><p>McGuire, JL, et al. 2016. <a href="http://www.pnas.org/content/113/26/7195.abstract" target="_blank">Achieving climate connectivity in a fragmented landscape</a>. Proceedings of the National Academy of Sciences: 113: 7195-7200.</p>',
        },
      ],
      activeContentStep: 0,
    };
  },
  methods: {
    debounce(func, wait = 100) {
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          func.apply(this, args);
        }, wait);
      };
    },
    shortcuts(event) {
      switch (event.srcKey) {
        case 'caption':
          console.log('toggle caption');
          this.toggleCaption();
          break;
        case 'dat':
          console.log('toggle dat');
          this.toggleDat();
          break;
      }
    },
    flyToLocation(map, location) {
      var locations = {
        SA: {
          coords: [-60.28, -11.58],
          zoom: 3.84,
        },
        NA: {
          coords: [-94.5, 41],
          zoom: 4,
        },
        West: {
          coords: [-75, 8.3],
          zoom: 2.67,
        },
        West2: {
          coords: [-71.12, 6.4],
          zoom: 2.41,
        },
        WestTight: {
          coords: [-109, 44],
          zoom: 8.5,
        },
        East: {
          coords: [-78, 37],
          zoom: 5,
        },
        World: {
          coords: [12.2, 17.2],
          zoom: 2,
        },
      };

      var coords = locations[location].coords;
      var zoom = locations[location].zoom;

      console.log('flying to ' + location);

      map.flyTo({
        center: coords,
        zoom: zoom,
        speed: 0.5,
        curve: 1,
        essential: true,
      });
    },
    fadeOpacity(layer, fadeDirection, fadeTime) {
      var self = this;
      var counter = 0;
      var opacityFader = setInterval(function() {
        if (fadeDirection === 'in') {
          self[layer] = counter / 50;
        } else if (fadeDirection === 'out') {
          self[layer] = 1 - counter / 50;
        }

        counter++;
        if (counter === 51) {
          clearInterval(opacityFader);
        }
      }, fadeTime / 50);
    },
    removeDiv(divId, removeTime) {
      setTimeout(function() {
        document.getElementById(divId).remove();
      }, removeTime);
    },

    createMap() {
      var self = this;
      // mapboxgl.accessToken =
      //   "pk.eyJ1IjoidG5jbWFwYm94IiwiYSI6ImNrYXBwejJraDAwcTQyc21lM3FxOTNvNGMifQ.xzJgQl3gipcqxuKWc5Uqbw"; // tnc global mapbox account
      // mapboxgl.accessToken =
      //   'pk.eyJ1IjoiZG1hamthIiwiYSI6IlNuSHVNb0UifQ.zIkArM4rtyvdtMZjZEesBA';
      mapboxgl.accessToken =
        'pk.eyJ1IjoiZG1hamthIiwiYSI6ImNrcmJpMjE2bTR0ZmwydnRmNm4xMG5yMGMifQ.XtPOIE4pFFUEIDcXc8W0oQ';
      const map = new mapboxgl.Map({
        container: 'map', // container id
        //style: "mapbox://styles/tncmapbox/cke4snn1m1h5619mp2n6r9afk", // DEV2
        //style: 'mapbox://styles/dmajka/ck21ant3kdor91cp7bjijnavk', // Albers
        style: 'mapbox://styles/dmajka/ck7c4399204jm1iqrfcvlxf42',
        center: [-78, 19], // NA-SA
        zoom: 3, // starting zoom, // NA-SA
        attributionControl: true,
        hash: true,
      });

      // disable map rotation using right click + drag
      map.dragRotate.disable();

      // disable map rotation using touch rotation gesture
      map.touchZoomRotate.disableRotation();

      map.addControl(
        new mapboxgl.NavigationControl({
          showCompass: false,
        }),
        'top-left'
      );

      map.on('load', () => {
        console.log('map loaded');
      }); // end map on load event

      map.once('idle', () => {
        console.log('map once idle');
      }); // end map on load event

      map.on('load', function() {
        map.setPaintProperty('lakes-7oy7ga', 'fill-opacity', 0);
        map.setPaintProperty('americas-mask2-c5phmk', 'fill-opacity', 1);
      });

      self.map = map;
      return map;
    },
    calculateParticleWidth() {
      var zoomLevel = this.map.getZoom();
      var particleWidth = 0.9;
      var self = this;

      if (zoomLevel < 2) {
        particleWidth = self.zoomWidth.z2; // 0.5
      } else if (zoomLevel < 3) {
        particleWidth = self.zoomWidth.z3; //0.4
      } else if (zoomLevel < 4) {
        particleWidth = self.zoomWidth.z4; //0.2
      } else if (zoomLevel < 5) {
        particleWidth = self.zoomWidth.z5; // 0.07
      } else if (zoomLevel < 6) {
        particleWidth = self.zoomWidth.z6; // 0.05
      } else {
        particleWidth = self.zoomWidth.z7;
      }
      console.log('particle width', particleWidth);
      return particleWidth;
    },
    buildFlow(map, divName, config, windyContainer, cssClassArray) {
      //var self = this;
      // GET WIND DATA
      fetch(config.spData)
        .then((d) => d.json())
        .then((data) => {
          // Remember - dom elements with ID, are exposed globally, so mapcanvas element exists already
          var self = this;
          var windy, timeout;
          var parentNode = document.getElementById('windContainer' + divName);
          var canvasNode = document.createElement('canvas');
          canvasNode.id = divName;
          canvasNode.className = 'flowLayer';
          canvasNode.classList.add(...cssClassArray);
          parentNode.appendChild(canvasNode);

          windy = new Windy(
            { canvas: document.getElementById(divName), data: data },
            config
          );

          resetWind(map, windy, divName, this[divName + windyContainer]);

          // REBUILD WIND AFTER MOVING, ZOOMING, OR RESIZING MAP
          self.map.on('resize', () => {
            resetWind(map, windy, divName, this[divName + windyContainer]);
          });
          self.map.on('move', () => {
            resetWind(map, windy, divName, this[divName + windyContainer]);
          });
          self.map.on('zoom', () => {
            resetWind(map, windy, divName, this[divName + windyContainer]);
          });

          function resetWind(map, windy, divName, activeFlowConfig) {
            var mapcanvas = document.getElementById(divName);
            var obj = getEventObject(map);
            var { north, south, west, east, width, height } = obj;

            try {
              mapcanvas.style.display = 'none';
            } catch {
              console.log('oops');
            }

            if (windy) {
              windy.stop();
            }
            if (timeout) {
              clearTimeout(timeout);
            }
            timeout = setTimeout(function() {
              var width2, height2;

              mapcanvas.style.display = 'initial';
              mapcanvas.width = width; // /2
              mapcanvas.height = height;

              // If retina display, double width and height
              if (window.devicePixelRatio === 1) {
                width2 = width;
                height2 = height;
              } else {
                width2 = width / 2;
                height2 = height / 2;
              }
              windy.start(
                [
                  [0, 0],
                  [width2, height2],
                ],
                width2,
                height2,
                [
                  [west, south],
                  [east, north],
                ],
                activeFlowConfig
              );
            }, 50);
          }

          function getEventObject(map) {
            var canvas = map.getCanvas();
            var dimensions = map.getBounds();

            var result = {
              width: canvas.width,
              height: canvas.height,
              north: dimensions.getNorth(),
              south: dimensions.getSouth(),
              west: dimensions.getWest(),
              east: dimensions.getEast(),
              zoomLevel: map.getZoom(),
            };

            return result;
          }
        });
    },
    toggleCaption() {
      console.log('toggle caption');
      let captionState = this.showCaption;
      this.showCaption = captionState ? false : true;
      //document.getElementById('birds').remove();
    },
    toggleDat() {
      console.log('toggle Dat');
      let captionState = this.showDat;
      this.showDat = captionState ? false : true;
    },
    loadFlowLayers() {
      var self = this;

      // Add config to Windy 1
      this.amphibsActive = this.config.scene5.amphibs;
      this.birdsActive = this.config.scene5.birds;
      this.mammalsActive = this.config.scene5.mammals;

      var amphibs = this.amphibsActiveWindy;
      var birds = this.birdsActiveWindy;
      var mammals = this.mammalsActiveWindy;

      // Map properties - fade in countries and country lines
      this.fadeOpacity('mapCountryLineOpacity', 'in', 10);
      //this.mapCountryLineOpacity = 1;
      setTimeout(function() {
        self.mapCountryLabels = true;
      }, 10);

      // Build flow layers
      this.buildFlow(self.map, 'birds', birds, 'ActiveWindy', []);
      this.buildFlow(self.map, 'mammals', mammals, 'ActiveWindy', []);
      this.buildFlow(self.map, 'amphibs', amphibs, 'ActiveWindy', []);
    },
    nextContent() {
      this.activeContentStep = this.activeContentStep + 1;
    },
    previousContent() {
      this.activeContentStep = this.activeContentStep - 1;
    },
  },
  mounted: function() {
    this.createMap();
    this.loadFlowLayers();
  },
  watch: {
    mapCountryLabels: {
      handler() {
        var labelState = this.mapCountryLabels;
        let labelVisibility = labelState ? 'visible' : 'none';
        this.map.setLayoutProperty(
          'country-label-lg',
          'visibility',
          labelVisibility
        );
      },
    },
    mapCityLabels: {
      handler() {
        var labelState = this.mapCityLabels;
        let labelVisibility = labelState ? 'visible' : 'none';
        this.map.setLayoutProperty(
          'place-city-lg-n',
          'visibility',
          labelVisibility
        );
        this.map.setLayoutProperty(
          'place-city-lg-s',
          'visibility',
          labelVisibility
        );
      },
    },

    mapSatelliteOpacity: {
      handler() {
        let opacity = this.mapSatelliteOpacity;
        this.map.setPaintProperty(
          'mapbox-satellite',
          'raster-opacity',
          opacity
        );
      },
    },

    mapCountryLineWidth: {
      handler() {
        let lineWidth = this.mapCountryLineWidth;
        this.map.setPaintProperty(
          'admin-2-boundaries',
          'line-width',
          lineWidth
        );
      },
    },

    mapCountryLineOpacity: {
      handler() {
        let opacity = this.mapCountryLineOpacity;
        this.map.setPaintProperty(
          'admin-2-boundaries',
          'line-opacity',
          opacity
        );

        this.map.setPaintProperty(
          'admin-2-boundaries-bg',
          'line-opacity',
          opacity
        );
      },
    },
    mapRoadsOpacity: {
      handler() {
        let opacity = this.mapRoadsOpacity;
        this.map.setPaintProperty('major-roads', 'line-opacity', opacity);
      },
    },
    mapLandColor: {
      handler() {
        let color = this.mapLandColor;
        this.map.setPaintProperty('background', 'background-color', color);
      },
    },
    mapLandOpacity: {
      handler() {
        let opacity = this.mapLandOpacity;
        this.map.setPaintProperty('background', 'background-opacity', opacity);
      },
    },
    mapLakeColor: {
      handler() {
        let color = this.mapLakeColor;
        this.map.setPaintProperty('lakes-7oy7ga', 'fill-color', color);
      },
    },
    mapLakeOpacity: {
      handler() {
        let opacity = this.mapLakeOpacity;
        this.map.setPaintProperty('lakes-7oy7ga', 'fill-opacity', opacity);
      },
    },
    mapWaterColor: {
      handler() {
        let color = this.mapWaterColor;
        //this.map.setPaintProperty('americas-mask2-c5phmk', 'fill-color', color);
        this.map.setPaintProperty('water', 'fill-color', color);
      },
    },
    mapWaterOpacity: {
      handler() {
        let opacity = this.mapWaterOpacity;
        // this.map.setPaintProperty(
        //   'americas-mask2-c5phmk',
        //   'fill-opacity',
        //   opacity
        // );
        this.map.setPaintProperty('water', 'fill-opacity', opacity);
      },
    },

    compositeSelected: {
      deep: true,
      handler() {
        let currentZoom = this.map.getZoom();
        this.map.zoomTo(currentZoom);
      },
    },
    amphibsActive: {
      deep: true,
      handler() {
        let currentZoom = this.map.getZoom();
        this.map.zoomTo(currentZoom);
      },
    },
    amphibsColor: {
      handler() {
        let currentZoom = this.map.getZoom();
        this.map.zoomTo(currentZoom);
      },
    },
    birdsActive: {
      deep: true,
      handler() {
        let currentZoom = this.map.getZoom();
        this.map.zoomTo(currentZoom);
      },
    },
    birdsColor: {
      handler() {
        let currentZoom = this.map.getZoom();
        this.map.zoomTo(currentZoom);
      },
    },
    mammalsActive: {
      deep: true,
      handler() {
        let currentZoom = this.map.getZoom();
        this.map.zoomTo(currentZoom);
      },
    },
    mammalsColor: {
      handler() {
        let currentZoom = this.map.getZoom();
        this.map.zoomTo(currentZoom);
      },
    },
  },
  computed: {
    activeContent() {
      return this.content[this.activeContentStep].text;
    },
    amphibsActiveWindy() {
      //var birdsConfig = this.birdsActive;
      let amphibsConfig = JSON.parse(JSON.stringify(this.amphibsActive));
      var amphibsColor = this.amphibsColor;
      amphibsConfig.FADE_FILL_STYLE =
        'rgba(0, 0, 0, ' + amphibsConfig.FADE_TRANSPARENCY + ')';
      amphibsConfig.COLOR_RAMP = (' ' + amphibsColor).slice(1);
      amphibsConfig.COMPOSITE_OPERATION = this.compositeSelected;
      amphibsConfig.PARTICLE_LINE_WIDTH = this.calculateParticleWidth();
      return amphibsConfig;
    },
    birdsActiveWindy() {
      //var birdsConfig = this.birdsActive;
      let birdsConfig = JSON.parse(JSON.stringify(this.birdsActive));
      var birdsColor = this.birdsColor;
      birdsConfig.FADE_FILL_STYLE =
        'rgba(0, 0, 0, ' + birdsConfig.FADE_TRANSPARENCY + ')';
      birdsConfig.COLOR_RAMP = (' ' + birdsColor).slice(1);
      birdsConfig.COMPOSITE_OPERATION = this.compositeSelected;
      birdsConfig.PARTICLE_LINE_WIDTH = this.calculateParticleWidth();
      return birdsConfig;
    },
    mammalsActiveWindy() {
      //var birdsConfig = this.birdsActive;
      let mammalsConfig = JSON.parse(JSON.stringify(this.mammalsActive));
      var mammalsColor = this.mammalsColor;
      mammalsConfig.FADE_FILL_STYLE =
        'rgba(0, 0, 0, ' + mammalsConfig.FADE_TRANSPARENCY + ')';
      mammalsConfig.COLOR_RAMP = (' ' + mammalsColor).slice(1);
      mammalsConfig.COMPOSITE_OPERATION = this.compositeSelected;
      mammalsConfig.PARTICLE_LINE_WIDTH = this.calculateParticleWidth();
      return mammalsConfig;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,800&display=swap');

body {
  background-color: #000;
  padding: 0px;
  margin: 0px;
  font-family: 'Open Sans', sans-serif;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Open Sans', 'Futura Bold', helvetica, arial, 'arial narrow',
    arial;
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 0px;
  width: 100%;
  height: 100%;
}
p {
  color: white;
  text-align: left;
  margin: 10px 10px;
}
h2 {
  font-size: 24px;
  margin: 10px 10px 0px;
  color: #fff;
  padding: 3px 5px;
  display: inline-block;
  background: #fc47dc;
  text-align: left;
  transform: rotate(-2deg);
}

/* .map-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
} */

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  outline: none !important;
  /* margin: 20px 0px 20px 0px;
  border: 10px solid white;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1); */
  /* border-right: 1px solid #ccc; */
}
.small {
}

.hide {
  display: none !important;
}
/* .nocursor {
  cursor: none !important;
} */

/* .mapboxgl-control-container {
  display: none;
} */

#viz-controls {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 700px;
  background: white;
  border: 1px solid black;
  z-index: 9999999;
}

div #viz-meta div {
  text-align: left;
}

p.dat-meta {
  display: block;
  background: black;
  padding: 10px;
  text-align: left;
  line-height: 1.5em;
  margin: 0 0;
}

div.dat-gui-ui {
  z-index: 999999 !important;
  width: 300px;
  height: 100% !important;
}
div.vue-dat-gui .group {
  height: 100% !important;
}

.vue-dat-gui .group.group--main > ul {
  max-height: 90vh !important;
}

#caption {
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 9999999;
}

.steps {
  position: absolute;
  width: 300px;
  right: 20px;
  top: 850px;
  z-index: 99999999;
}

#caption p {
  text-align: left;
  color: yellow;
  font-size: 30px;
  line-height: 1.5em;
  margin: 0 0px 0px;
  padding: 10px 80px;
  /* color: black; */
  text-shadow: 1px 1px 2px black;
  font-weight: bold;
  /* background: white;
  color: black; */
}

#viz-meta {
  z-index: 99999;
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 340px;
  max-height: 360px;
  /* height: 90vh; */
  border: 5px solid #000;
  background: #000;
  overflow-y: scroll;
}

#viz-meta h1 {
  font-family: 'Open Sans', sans-serif;
  text-align: left;
  font-size: 40px;
  line-height: 1em;
  text-transform: uppercase;
  font-weight: 800;
  font-style: italic;
  padding: 10px;
  background: #fcfa47;
  color: #000;
  margin: 0;
}

div.steps {
  width: 300px;
  height: 30px;
  margin-left: 0px;
  padding-left: 30px;
}
span.step {
  padding: 2px 8px;
  border: 1px solid #000;
  cursor: pointer;
}

.mapbox-map-container {
  top: 0px;
  position: fixed;
  width: 100%;
  height: 100%;
}

.wind-map-container {
  /*  opacity: 0.75;*/
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  /*  height: 900px;*/
  height: 100%;
  z-index: 9999;
  pointer-events: none;
}

.flowLayer {
  position: absolute;
  top: 0;
  left: 0;
}

canvas {
  outline: none !important;
}

a {
  text-decoration: none;
  color: #47d4fc;
}

a:hover {
  text-decoration: none;
  color: #47d4fc;
  border-bottom: 1px solid #47d4fc;
}

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: black #fc47dc;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: black;
}

*::-webkit-scrollbar-thumb {
  background-color: #666;
  border-radius: 0px;
  border: 0px solid yellow;
}

@media (max-width: 480px) {
  .vue-dat-gui {
    display: none;
  }

  #viz-meta {
    max-height: 240px;
    height: 240px;
  }
  #viz-meta h1 {
    font-size: 20px;
  }
  #viz-meta h2 {
    font-size: 16px;
  }
  #viz-meta p {
    font-size: 14px;
  }
  .title-break {
    display: none;
  }
}
</style>
