<template>
  <div class="slider-svg">
    <div class="svg-control" v-if="name == 'svg-control'">
      <svg viewBox="0 0 496 535" fill="none" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <g clip-path="url(#clip1)">
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M173.5 136C173.5 136 175.5 67 245.5 67"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M176 138.5C176 138.5 245 136.5 245 66.5"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M248 532C383.586 532 493.5 422.086 493.5 286.5C493.5 150.914 383.586 41 248 41C112.414 41 2.5 150.914 2.5 286.5C2.5 422.086 112.414 532 248 532Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M2.56006 281.38H493.44L320.78 108.72"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M404.17 281.5H173V210.5H404.17C422.86 210.5 438 225.65 438 244.33V247.66C438 266.35 422.85 281.5 404.17 281.5Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M173 210.5H321V2.5H173V138.5"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M173.5 281.5C134.01 281.5 102 249.49 102 210C102 170.51 134.01 138.5 173.5 138.5C212.99 138.5 245 170.51 245 210"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M248 2.5V210"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M53 436V318L243.7 281.82C245.93 281.4 248 283.11 248 285.38V528"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M247 281.5C247 281.5 172 369.5 52 318.5"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M68 454V324.59"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M443 436V318L252.3 281.82C250.07 281.4 248 283.11 248 285.38V528"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M249 281.5C249 281.5 324 369.5 444 318.5"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M428 454V324.59"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M131 374.5C131 374.5 189 386.17 248 343.33"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M131 407.5C131 407.5 189 419.17 248 376.33"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M131 440.5C131 440.5 189 452.17 248 409.33"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M365 374.5C365 374.5 307 386.17 248 343.33"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M365 407.5C365 407.5 307 419.17 248 376.33"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 0 ? 'animatePath' : ''"
            d="M365 440.5C365 440.5 307 452.17 248 409.33"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
        </g>
        <defs>
          <clipPath id="clip1">
            <rect width="496" height="534.5" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="svg-seismic" v-if="name == 'svg-seismic'">
      <svg viewBox="0 0 496 532" fill="none" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <g clip-path="url(#clip4)">
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M226.03 38.97C233.27 38.33 240.59 38 248 38C383.59 38 493.5 147.91 493.5 283.5C493.5 419.09 383.59 529 248 529C112.41 529 2.5 419.09 2.5 283.5C2.5 196.25 48.02 119.63 116.6 76.09"
            stroke="white"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M247 154.5H154V301.5H247V154.5Z"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M98 301.5H154V510"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M247 528.5V419.5"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M154 450H397"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M397 375.78H474"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M98 154.5L220 2.5H275L154 154.5L275 2.5L397 154.5L247 301.5H397V479V154.5H98ZM98 154.5V476"
            stroke-width="5"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          ></path>
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M173 120.5C205.033 120.5 231 94.5325 231 62.5C231 30.4675 205.033 4.5 173 4.5C140.967 4.5 115 30.4675 115 62.5C115 94.5325 140.967 120.5 173 120.5Z"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 1 ? 'animatePath' : ''"
            class="path"
            d="M395 302.5C395 368.77 341.27 422.5 275 422.5C208.73 422.5 155 368.77 155 302.5"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
        </g>
        <defs>
          <clipPath id="clip4">
            <rect width="496" height="531.5" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="svg-reliability" v-if="name == 'svg-reliability'">
      <svg viewBox="0 0 560 496" fill="none" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <g clip-path="url(#clip3)">
          <path
            :class="value == 2 ? 'animatePath' : ''"
            d="M308.5 493.5C444.086 493.5 554 383.586 554 248C554 112.414 444.086 2.5 308.5 2.5C172.914 2.5 63 112.414 63 248C63 383.586 172.914 493.5 308.5 493.5Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 2 ? 'animatePath' : ''"
            d="M308.5 3H2.5V493H308.5V3Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 2 ? 'animatePath' : ''"
            d="M308.5 147.5H2.5"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 2 ? 'animatePath' : ''"
            d="M309 339H3"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 2 ? 'animatePath' : ''"
            d="M309 248L553.75 492.75H308.5"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
        </g>
        <defs>
          <clipPath id="clip3">
            <rect width="559.79" height="496" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="svg-ecotech" v-if="name == 'svg-ecotech'">
      <svg viewBox="0 0 496 545" fill="none" xmlns="http://www.w3.org/2000/svg" width="300" height="300">
        <g clip-path="url(#clip2)">
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M398.16 102.33C456.16 147.23 493.5 217.54 493.5 296.57C493.5 432.16 383.59 542.07 248 542.07C112.41 542.07 2.5 432.16 2.5 296.57C2.5 217.2 40.16 146.63 98.59 101.75"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M107.67 95.1001C147.45 67.3501 195.82 51.0701 248 51.0701C300.18 51.0701 348.55 67.3501 388.33 95.1001"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M172 107.57C122 54.5701 172 3.57007 172 3.57007C172 3.57007 222 54.5701 172 107.57ZM172 107.57V530.57"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M323 109.07C273 56.0701 323 5.07007 323 5.07007C323 5.07007 373 56.0701 323 109.07ZM323 109.07V532.07"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M172.16 166.95C169.26 94.14 97.8398 94.2 97.8398 94.2C97.8398 94.19 99.3099 165.6 172.16 166.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M172.16 389.95C169.26 317.14 97.8398 317.2 97.8398 317.2C97.8398 317.19 99.3099 388.6 172.16 389.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M323.16 314.95C320.26 242.14 248.84 242.2 248.84 242.2C248.84 242.19 250.31 313.6 323.16 314.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M323.16 240.95C320.26 168.14 248.84 168.2 248.84 168.2C248.84 168.19 250.31 239.6 323.16 240.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M323.16 166.95C320.26 94.14 248.84 94.2 248.84 94.2C248.84 94.19 250.31 165.6 323.16 166.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M172.16 465.95C169.26 393.14 97.8398 393.2 97.8398 393.2C97.8398 393.19 99.3099 464.6 172.16 465.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M171.84 166.95C174.74 94.14 246.16 94.2 246.16 94.2C246.16 94.19 244.69 165.6 171.84 166.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M171.84 389.95C174.74 317.14 246.16 317.2 246.16 317.2C246.16 317.19 244.69 388.6 171.84 389.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M171.84 465.95C174.74 393.14 246.16 393.2 246.16 393.2C246.16 393.19 244.69 464.6 171.84 465.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M172 314.57C212.317 314.57 245 281.887 245 241.57C245 201.253 212.317 168.57 172 168.57C131.683 168.57 99 201.253 99 241.57C99 281.887 131.683 314.57 172 314.57Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M323 463.57C363.317 463.57 396 430.887 396 390.57C396 350.253 363.317 317.57 323 317.57C282.683 317.57 250 350.253 250 390.57C250 430.887 282.683 463.57 323 463.57Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M323.84 314.95C326.74 242.14 398.16 242.2 398.16 242.2C398.16 242.19 396.69 313.6 323.84 314.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M323.84 240.95C326.74 168.14 398.16 168.2 398.16 168.2C398.16 168.19 396.69 239.6 323.84 240.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M323.84 166.95C326.74 94.14 398.16 94.2 398.16 94.2C398.16 94.19 396.69 165.6 323.84 166.95Z"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
          <path
            :class="value == 3 ? 'animatePath' : ''"
            d="M12.5 220.07C12.5 220.07 182.92 194.62 274.72 336.85"
            class="path"
            stroke-width="5"
            stroke-miterlimit="10"
          ></path>
        </g>
        <defs>
          <clipPath id="clip2">
            <rect width="496" height="544.57" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
	props: ['value', 'name'],
}
</script>
<style>
.path {
	stroke: #fff;
	stroke-dasharray: 3000;
	stroke-dashoffset: 3000;
}
.animatePath {
	animation: offset 4s forwards;
}
@keyframes offset {
	to {
		stroke-dashoffset: 0;
	}
}
@media screen and (max-width: 1024px) and (min-width: 768px){
    .slider-svg div svg{
        width: 100px !important;
    }
}
@media screen and (max-width: 767px){
  .slider-svg div svg{
        width: 100px !important;
    }
}
</style>