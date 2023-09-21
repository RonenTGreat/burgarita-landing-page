import "./header.styles.css"

const Header = () => {
  return (
    <header className="container header">
      <div className="logo">
        <svg
          width="53"
          height="64"
          viewBox="0 0 53 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.8753 35.9264C54.2593 28.1874 47.3809 22.8205 38.3877 20.1885C39.0643 18.3423 39.2604 15.9256 37.3525 13.6181C34.9056 10.6648 36.5318 6.36259 36.5318 6.36259C36.5318 6.36259 31.3962 12.0497 34.6389 15.9712C35.8349 17.4165 36.4576 18.6859 36.7553 19.7474C34.2727 19.133 31.7588 18.7171 29.2303 18.5024C29.9855 16.038 30.0588 12.9426 27.6791 9.97867C24.4214 5.91615 26.5909 0 26.5909 0C26.5909 0 19.7424 7.81963 24.0663 13.2109C25.6448 15.1769 26.476 16.9075 26.8788 18.3582C24.1988 18.2617 21.6195 18.4027 19.3282 18.7877C19.6011 17.2023 19.3732 15.3794 17.9166 13.6191C15.4698 10.6658 17.0969 6.36259 17.0969 6.36259C17.0969 6.36259 11.9603 12.0497 15.2039 15.9712C16.2197 17.1992 16.8151 18.2956 17.1569 19.2511C16.77 19.3529 16.3946 19.4632 16.0333 19.583C4.86632 18.3285 -0.00434197 21.0984 2.22076 26.532C-1.66235 31.1937 -0.203091 36.5139 4.65609 40.5849C7.19124 53.1202 7.84402 63.6259 26.938 63.6259C43.9756 63.6259 46.3297 55.2591 48.44 44.5509C54.7717 43.0376 53.4228 39.394 50.8753 35.9264ZM49.2968 34.674C47.1759 40.1034 37.9717 44.1903 26.938 44.1903C15.9053 44.1903 6.70099 40.1034 4.57924 34.674C4.53419 34.5128 4.49091 34.3453 4.44763 34.182C5.45815 31.1046 8.74236 28.4344 13.3551 26.6465C12.2713 27.9042 12.046 29.7822 14.8983 30.4408C15.7145 30.6295 17.9555 29.9763 16.9759 26.6381C16.8389 26.1715 16.6155 25.8586 16.3407 25.6699C19.5101 24.7993 23.1079 24.2977 26.938 24.2977C27.3673 24.2977 27.7887 24.3157 28.2118 24.3274C26.0017 25.269 24.1988 28.1704 28.7117 29.0262C29.7081 29.2149 32.4438 28.5617 31.2478 25.2234C31.1433 24.9259 30.9758 24.6664 30.7619 24.4705C34.9904 24.8438 38.8214 25.8215 41.9184 27.2308C39.1951 27.0484 36.1741 29.0633 41.0121 31.8999C42.05 32.5086 45.2035 33.0675 44.7697 29.3814C44.7384 29.1151 44.6601 28.8599 44.5401 28.6327C47.0161 30.199 48.743 32.0982 49.4275 34.182L49.2968 34.674Z"
            fill="#D1D1D2"
          />
          <path
            d="M20.9336 33.7667C23.7212 33.7667 25.5802 30.9517 27.0365 29.85C29.0714 28.3091 34.188 27.7081 29.6819 27.5868C25.4078 27.4722 20.1308 31.3475 16.6042 31.0808C10.7651 30.6377 16.7457 33.7667 20.9336 33.7667ZM26.9572 39.5181C27.9419 39.73 30.6485 38.9962 29.4646 35.247C28.1273 31.0047 20.0317 38.0292 26.9572 39.5181ZM11.63 30.239C10.6893 28.7559 9.32518 26.8751 8.76041 27.8545C7.9887 29.1941 7.74555 31.8897 8.30601 32.0091C12.7 32.9501 12.3922 31.44 11.63 30.239ZM37.1739 30.84C37.9663 29.744 36.3841 27.1062 35.3684 27.5675C33.7784 28.2898 32.8619 27.8006 32.1634 28.8965C30.5278 31.4631 36.097 32.3279 37.1739 30.84ZM36.679 33.9805C35.5391 33.4191 35.8081 35.2999 34.1242 33.7908C32.9188 32.7103 30.3251 35.4357 32.0358 37.2867C33.9397 39.3467 34.4467 37.3888 35.2468 37.5535C36.873 37.8877 39.6693 35.454 36.679 33.9805ZM17.7252 34.6239C17.1311 33.9709 16.3344 34.7587 15.8843 35.7198C15.4385 35.4752 15.0755 35.4184 15.0755 35.4184C14.7349 34.334 13.7218 33.5905 13.7218 33.5905C13.7218 33.5905 13.814 34.7182 13.9477 35.2681C12.8285 34.8242 12.794 32.5899 12.794 32.5899C12.794 32.5899 12.043 33.0916 12.1111 33.9439C10.8789 32.8335 9.8296 33.3526 9.8296 33.3526C9.8296 33.3526 11.3928 34.3349 11.6084 34.9975C10.7306 35.0736 10.2185 35.4126 9.92013 36.2014C9.92099 36.2081 11.655 35.2797 12.938 35.95C12.4318 36.4123 12.6836 37.567 12.6836 37.567C13.8778 36.1532 14.8315 36.3044 15.5946 36.5577C15.5023 36.9901 15.5083 37.385 15.6722 37.6248C16.9957 39.5682 21.6061 39.131 22.8443 37.6941C24.3438 35.9558 20.1774 37.3195 17.7252 34.6239Z"
            fill="#FF9900"
          />
          <path
            d="M21.2174 27.2603C20.818 28.0989 20.8154 28.732 21.2771 29.3908C21.2833 29.3927 21.4632 27.3557 22.658 26.5116C22.7554 27.1997 23.7895 27.5337 23.7895 27.5337C22.9626 24.4728 25.3767 24.3131 25.3653 23.2148C24.0854 23.3277 23.3585 24.3003 23.3585 24.3003C22.3323 24.081 21.2201 24.6416 21.2201 24.6416C21.2201 24.6416 22.1515 25.1087 22.651 25.2564C21.7187 26.0611 19.9525 24.9995 19.9525 24.9995C19.9525 24.9995 19.9525 25.9317 20.6547 26.2849C19.1422 26.8676 19 28.0787 19 28.0787C19 28.0787 20.5854 27.1328 21.2174 27.2603ZM43.6474 31.4406C44.0108 30.7194 43.4806 29.9698 43.4806 29.9698C43.4806 29.9698 42.6651 31.9214 41.458 31.8544C41.7758 31.425 42.2586 30.4708 42.2586 30.4708C42.2586 30.4708 41.0454 30.7121 40.3449 31.526C40.3449 31.526 39.2072 31.1966 38.1152 31.9012C38.7314 32.7913 40.7628 31.4177 41.8399 34.3924C41.8399 34.3924 42.4807 33.4813 42.1673 32.8674C43.6087 32.8023 44.9132 34.3272 44.9176 34.3217C44.9123 33.5051 44.5507 32.9986 43.7509 32.5729C44.1864 32.0783 46 31.8535 46 31.8535C46 31.8535 45.1959 30.9681 43.6474 31.4406Z"
            fill="#D1D1D2"
          />
        </svg>

        <p>Burgarita.</p>
      </div>

      <nav className="nav">
          <li className="nav-list"><a className="nav-link" href="#">Our Menu</a></li>
          <li className="nav-list"><a className="nav-link" href="#">Catering</a></li>
          <li className="nav-list"><a className="nav-link" href="#">About Us</a></li>
          <li className="nav-list"><a className="nav-link" href="#">Contact</a></li>
      </nav>

      <a href="#" className="btn-signup">Sign Up</a>
    </header>
  );
};

export default Header;
