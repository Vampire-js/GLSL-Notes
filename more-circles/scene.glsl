#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution; // Canvas size

float circle(vec2 p , float r1, float r2){
 return length(p) - r1;   
}

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;  // Normalize coordinates (0 to 1)
    uv = uv * 2.0 - 1.0;  // Convert to range (-1 to 1)
    uv.x *= u_resolution.x / u_resolution.y;  // Adjust for aspect ratio


    vec3 color = vec3(0.0);
    color = vec3((circle(uv, 0.3, 0.2)));

    gl_FragColor = vec4(color, 1.0);
}
