import Grid from "@mui/material/Unstable_Grid2";
import Ajprop from "../assets/img/ajp-full.png";
import EventImg from "../assets/img/eventImg.jpg";
import OutlyImg from "../assets/img/outly2.png";

type Project = {
  img: string;
  title: string;
  subtext: string;
  description: string;
  href?: string;
  border?: boolean;
};
type ProjectArr = Project[];

const projects: ProjectArr = [
  {
    img: EventImg,
    title: "Event Ticketing App",
    subtext: "Fullstack Project (MERN) + Redux ToolKit",
    description:
      "Sign up, create, book events and get shareable QR ticket links.",
  },
  {
    img: Ajprop,
    title: "AjeboProperty",
    subtext: "React + Firebase",
    description:
      "Rent or sale your home, view listings closest to you and more.",
    href: "https://ajebo-property.vercel.app/",
  },
  {
    img: OutlyImg,
    title: "Outly Ecommerce",
    subtext: "Typescript + React",
    description: "Buy and sell items. Not finished...",
    href: "https://outly-ecommerce.vercel.app/",
  },
];
export function Work() {
  return (
    <>
      <div className="mt-16">
        {/* grid */}
        <Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 8 }}>
          {projects.map((item, index: number) => (
            <Grid xs={4} sm={4} key={index}>
              <div
                className={
                  item.border
                    ? `add-border grid-container relative`
                    : `grid-container relative`
                }
              >
                <article className="grid-article overflow-hidden">
                  <img
                    src={item.img}
                    alt="event-ticketing"
                    className="grid-image"
                  />
                </article>
                <div className="grid-info">
                  <div className="px-6">
                    <h3 className="grid-info-title">{item.title}</h3>
                    <p className="text-gray-700 text-sm text-center">
                      {item.subtext}
                    </p>
                    <p className="text-gray-700 text-sm text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
