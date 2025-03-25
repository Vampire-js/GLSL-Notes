precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

float sdfCircle(vec2 c, float rad, vec2 center) {
    return length(c - center) - rad*exp(length(c-center));
}

float sdfSquare(vec2 c, vec2 center, float size) {
    // Calculate distance from c to the edges of a centered square with the specified size
    vec2 d = abs(c - center) - vec2(size);
    return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}


void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution;
    vec2 c = uv - 0.5;
    c *= u_resolution.y / u_resolution.x;

    vec4 color = vec4(0.0); // Start with black

    float rad = .3;
    

    color += sdfCircle(c, rad, vec2(0.0)) <0.0? vec4(0.0275, 0.9529, 1.0, 1.0) : vec4(0.0);

    gl_FragColor = color;
}
