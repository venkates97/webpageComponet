export function ImageShowcase() {

  const imageShowcase = [{
    imageDivClass: "col-lg-6 order-lg-2 text-white showcase-img",
    imageUrl: "assets/img/bg-showcase-1.jpg",
    textDivClass: "col-lg-6 order-lg-1 my-auto showcase-text",
    heading: "Fully Responsive Design",
    para: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  },
  {
    imageDivClass: "col-lg-6 text-white showcase-img",
    imageUrl: "assets/img/bg-showcase-2.jpg",
    textDivClass: "col-lg-6 my-auto showcase-text",
    heading: "Updated For Bootstrap 5",
    para: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
  },
  {
    imageDivClass: "col-lg-6 order-lg-2 text-white showcase-img",
    imageUrl: "assets/img/bg-showcase-3.jpg",
    textDivClass: "col-lg-6 order-lg-1 my-auto showcase-text",
    heading: "Easy to Use & Customize",
    para: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
  }
  ];

  return (
    <>
      <section class="showcase">
        <div class="container-fluid p-0">

          {imageShowcase.map((e) => {
            return (
              <>
                <div class="row g-0">
                  <div class={e.imageDivClass} style={{ backgroundImage: `url(${e.imageUrl})` }}></div>
                  <div class={e.textDivClass}>
                    <h2>{e.heading}</h2>
                    <p class="lead mb-0">{e.para}</p>
                  </div>
                </div>
              </>
            );
          })}

        </div>
      </section>
    </>
  );
}
