import Grid from "@mui/material/Unstable_Grid2";
import Pro from "../assets/img/pro1-nrml.jpg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const lawrDevEmail = "lawrdev@gmail.com";

export function About() {
  return (
    <>
      <div className="mt-12 mb-16">
        <Grid container spacing={{ xs: 2, sm: 5 }} columns={{ xs: 4, sm: 8 }}>
          <Grid xs={4} sm={3}>
            <div className="about-image-wrapper">
              <img src={Pro} alt="profile" className="about-image" />
            </div>
          </Grid>

          <Grid xs={4} sm={5}>
            <div>
              <h2 className="mb-6 whitespace-pre-wrap text-3xl font-semibold">
                hello, i'm lawrence
              </h2>

              <p className="mb-2">Welcome to my portfolio site!</p>

              <p className="mb-2">
                I enjoy learning new things, brainstorming, solving problems and
                developing stuff.
              </p>
              <p className="mb-6">
                I can usually be found playing table tennis, playing chess ♟️,
                binging a tv series or watching a soccer match(Oh, i'm team
                Manchester United 😊!)
              </p>

              <div>
                <p className="bio">
                  "Many people tend to look at programming styles and languages
                  like religions: if you belong to one, you cannot belong to
                  others. But that's just wrong" <br />
                  "Simplicity is prerequisite for reliability"
                  <br />
                  "A long descriptive name is better than a short enigmatic name
                  and far better than a long descriptive comment"
                  <br />
                </p>
              </div>

              {/* contact options */}
              <div>
                <div id="contact">
                  <a
                    className="contact-icons"
                    target="_blank"
                    rel="noreferrer"
                    href={`mailto:${lawrDevEmail}`}
                  >
                    <EmailOutlinedIcon fontSize="small" />
                  </a>
                  <a
                    className="contact-icons"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/lawrdev"
                  >
                    <GitHubIcon fontSize="small" />
                  </a>
                  <a
                    className="contact-icons"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/lawrenceugoh/"
                  >
                    <LinkedInIcon fontSize="small" />
                  </a>
                </div>

                <div className="my-4 w-fit mx-auto">
                  <a
                    className="resume-btn"
                    href="https://docs.google.com/document/d/1mgPXcu7EeuDR78DJhwFql46wJZ48LCKmxXi9quHpmic/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View resume
                  </a>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
