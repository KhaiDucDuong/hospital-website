import { useNavigate  } from "react-router-dom";

export default function DoctorCard({ doctor, index }) {
    const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-body">
        <div className="doctor-widget">
          <div className="doc-info-left">
            <div className="doctor-img">
              <a href="/patient/doctor-profile">
                <img
                  src="../../img/doctors/doctor-thumb-01.jpg"
                  className="img-fluid"
                  alt="User Image"
                />
              </a>
            </div>
            <div className="doc-info-cont">
              <h4 className="doc-name">
                <a href="/patient/doctor-profile">{doctor.fullname}</a>
              </h4>
              <p className="doc-speciality">Bệnh Viện dã chiến HCMUTêÊ</p>
              <h5 className="doc-department">
                <img
                  src="../../img/specialities/specialities-05.png"
                  className="img-fluid"
                  alt="Speciality"
                  key={index}
                />
                Specialize: {doctor.specialize}
              </h5>
              <div className="rating">
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star filled" />
                <i className="fas fa-star" />
                <span className="d-inline-block average-rating">(17)</span>
              </div>
              <div className="clinic-details">
                <p className="doc-location">
                  <i className="fas fa-map-marker-alt" /> Sài Gòn, Việt Lam
                </p>
                <ul className="clinic-gallery">
                  <li>
                    <a
                      href="../../img/features/feature-01.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="../../img/features/feature-01.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../img/features/feature-02.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="../../img/features/feature-02.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../img/features/feature-03.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="../../img/features/feature-03.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="../../img/features/feature-04.jpg"
                      data-fancybox="gallery"
                    >
                      <img
                        src="../../img/features/feature-04.jpg"
                        alt="Feature"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="clinic-services">
                <span>Dental Fillings</span>
                <span> Whitneing</span>
              </div>
            </div>
          </div>
          <div className="doc-info-right">
            <div className="clini-infos">
              <ul>
                <li>
                  <i className="far fa-thumbs-up" /> 98%
                </li>
                <li>
                  <i className="far fa-comment" /> 17 Feedback
                </li>
                <li>
                  <i className="fas fa-map-marker-alt" /> Florida, USA
                </li>
                <li>
                  <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
                  <i
                    className="fas fa-info-circle"
                    data-toggle="tooltip"
                    title="Lorem Ipsum"
                  />{" "}
                </li>
              </ul>
            </div>
            <div className="clinic-booking">
              <a className="view-pro-btn" href="/patient/doctor-profile">
                View Profile
              </a>
              <a className="apt-btn pointer-hover" onClick={() => navigate("/patient/booking", { state: { doctor: doctor } })}>
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
