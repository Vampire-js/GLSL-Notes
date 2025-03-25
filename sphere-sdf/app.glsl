precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;


float sphereSDF(vec2 p , float r){
    return length(p) - r;
}

vec3 normalVec(vec2 p){
return vec3(
p.xx
)
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 c = uv - 0.5;
    c *= u_resolution.y / u_resolution.x;

    vec4 color = vec4(0.0, 0.0, 0.0, 0.0); // Start with black

    gl_FragColor = color;
}