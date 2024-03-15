export function IconGrid() {
  const iconData = [
    {
      heading: "Fully Responsive",
      para: "This theme will look great on any device, no matter the size!",
      divClass: "features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3",
      iClass: "bi-window m-auto text-primary",
    },
    {
      heading: "Bootstrap 5 Ready",
      para: "Featuring the latest build of the new Bootstrap 5 framework!",
      divClass: "features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3",
      iClass: "bi-layers m-auto text-primary",
    }, {
      heading: "Easy to Use",
      para: "Ready to use with your own content, or customize the source files!",
      divClass: "features-icons-item mx-auto mb-0 mb-lg-3",
      iClass: "bi-terminal m-auto text-primary",
    }
  ];
  return (
    <>
      <section className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            {iconData.map((e) => {

              return <div className="col-lg-4">
                <div className={e.divClass}>
                  <div className="features-icons-icon d-flex"><i className={e.iClass}></i></div>
                  <h3>{e.heading}</h3>
                  <p className="lead mb-0">{e.para}</p>
                </div>
              </div>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
