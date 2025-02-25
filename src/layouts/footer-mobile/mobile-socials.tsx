interface Icon {
  src: string;
  alt: string;
}

const icons: Icon[] = [
  { src: "/facebook-tiny.svg", alt: "Facebook icon by Icons8" },
  { src: "/twitter-tiny.svg", alt: "Twitter Bird icon by Icons8" },
  { src: "/instagram-tiny.svg", alt: "Instagram icon by Icons8" },
];

/**
 * MobileSocials component renders a list of social media icons.

 * @returns {JSX.Element} A div containing social media icons.
 */

const MobileSocials = () => {
  return (
    <div className="flex flex-row h-full w-full justify-start gap-4">
      {icons.map((icon: Icon, index) => (
        <div key={index} className="h-full">
          <img
            src={icon.src}
            alt={icon.alt}
            style={{ width: "25px", height: "25px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default MobileSocials;
