precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float e = 2.8;

float sdfSquare(vec2 c, vec2 center, float size) {
    // Calculate distance from c to the edges of a centered square with the specified size
    vec2 d = abs(c - center) - vec2(size);
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}


float sdfCircle(vec2 c, vec2 center, float rad) {
    return length(c - center) - rad;
}

float sigmoid(float x){
    return (1./(1. +  pow(e , x)))*1.0;
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.x;

    vec2 c = uv - 0.5;
    c *= u_resolution.y / u_resolution.x;

    vec3 color ;

    color += sdfSquare(c , vec2(.0,.0), .1) < 0.0 ? vec3(0.1686, 1.0, 0.0) : vec3(0.1373, 0.1333, 0.1333);
color *= (1.0 - exp(-ceil(abs(100.0*sin(u_time*0.2)*sdfSquare(c , vec2(.0,.0), .1)))));


float circle = sdfCircle(c , vec2(-.05,.0), .02);
    color += circle < 0.0 ? vec3(0.9569, 0.9608, 0.9608) : vec3(0.0, 0.0, 0.0);
color *= (1.0 - exp(-ceil(abs(500.0*circle))));

float circle1 = sdfCircle(c , vec2(.05,.0), .02);
    color += circle1 < 0.0 ? vec3(0.9804, 0.9804, 0.9804) : vec3(0.0, 0.0, 0.0);
color *= (1.0 - exp(-ceil(abs(500.0*circle1))));



    gl_FragColor = vec4(color, 1.0);
}
