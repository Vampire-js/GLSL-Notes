precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float sdfCircle(vec2 p, float r){
  return length(p) - r;
}
 
void main() {
    vec2 uv = gl_FragCoord.xy/u_resolution;
    uv = uv*u_resolution/100.0;

float radius = .5;
vec2 center = vec2(5.0,4.0);

float distanceToCircle = sdfCircle(uv-center, radius);

gl_FragColor = distanceToCircle > 0.0 ? vec4(0.9725, 0.3176, 0.3176, 1.0) : vec4(0.1647, 0.851, 0.9569, 1.0);
gl_FragColor = gl_FragColor* floor(1.0 - exp(-abs(500.0*distanceToCircle)));

}