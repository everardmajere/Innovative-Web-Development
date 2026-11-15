export default function Image({img_file, alt, width, height}) {

    return (
        <img src={`/src/assets/${img_file}`}
        alt ={alt}
        width={width}
        height={height}
        style={{borderRadius: "50%", border: "5px solid white"}}
        />
    );
}