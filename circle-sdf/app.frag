precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float sdfCircle(vec2 p, float r){
  return length(p) - r;
}

 
void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution;
    uv = uv*u_resolution/100.0;
float d = length(uv);
d -= step(6.0, 10.0);

gl_FragColor = vec4(d,d,d,1.0);
}