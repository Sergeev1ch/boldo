import body1 from './img/body1.png';
import body2 from './img/body2.png';
import body3 from './img/body3.png';
import body4 from './img/body4.png';
import body5 from './img/body5.png';
import avatar1 from './img/avatar1.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';
import bg1 from './img/bg1.png';
import img from "./img/img.png";
import block1 from "./img/block1.png";
import block2 from "./img/block2.png";
import block3 from "./img/block3.png";
import logos from "./img/Logos.svg";

import React from 'react';

function Main() {
  return (
      <>
          {/* 1-st block */}
          <div className="min-h-screen flex flex-col justify-between bg-main pl-28 pr-28 pt-14 pb-14 bg-[url('./img/Ellipse1.svg')] bg-no-repeat bg-right-top">
              {/* navbar */}
              <div className="flex justify-between items-center">
                  {/* logo */}
                  <div className="flex items-center">
                      <svg className='text-logo' width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 16H17.0678C21.9511 16 25.9099 19.9588 25.9099 24.8421V24.8421C25.9099 29.7255 21.9511 33.6842 17.0678 33.6842H0V16Z" fill="#65E4A3"/>
                          <path d="M0 0.526352H11.3927C15.0552 0.526352 18.0243 3.49541 18.0243 7.15793V7.15793C18.0243 10.8204 15.0552 13.7895 11.3927 13.7895H0V0.526352Z" fill="#65E4A3"/>
                      </svg>
                      <span className="text-white font-manrope font-bold text-logo ml-4">Boldo</span>
                  </div>
                  {/* links */}
                  <div className="w-1/3 flex text-white justify-between items-center text-base font-open-sans font-semibold z-10">
                      <a>Product</a>
                      <a>Services</a>
                      <a>About</a>
                      <a className="font-bold text-main bg-white pt-2 pb-2 pl-10 pr-10 rounded-3xl">Log In</a>
                  </div>
              </div>
              {/* main */}
              <div className="flex justify-between items-center">
                  {/* main text */}
                  <div className="w-1/2">
                      <p className="text-white text-5xl font-manrope font-normal">Save time by building fast with Boldo Template</p>
                      <p className="text-white text-base font-manrope font-normal mt-4">Funding handshake buyer business-to-business metrics iPad partnership. <br/>
                          First mover advantage innovator success deployment non-disclosure.</p>
                      {/* buttons */}
                      <div className="mt-14">
                          <a className="text-main bg-green-btn px-14 py-4 rounded-56px font-open-sans font-bold text-xl">Buy template</a>
                          <a className="text-white border-2 px-14 py-4 rounded-56px font-open-sans font-bold text-xl ml-8">Explore</a>
                      </div>
                  </div>
                  {/* diagrams */}
                  <div>
                      <svg width="494" height="232" viewBox="0 0 494 232" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_b_64_816)">
                          <g clip-path="url(#clip0_64_816)">
                              <rect x="0.14209" width="493.858" height="231.898" rx="15.0305" fill="white" fill-opacity="0.18"/>
                              <rect x="82.9223" y="68.1805" width="11.7769" height="54.1739" rx="5.88847" transform="rotate(90 82.9223 68.1805)" fill="#95ABBC"/>
                              <rect x="367.207" y="68.1091" width="11.9197" height="269.981" rx="5.95985" transform="rotate(90 367.207 68.1091)" fill="#8FB6D5"/>
                              <path d="M384.909 70.3059C385.685 70.3059 386.3 70.4863 386.754 70.8472C387.208 71.208 387.435 71.7066 387.435 72.343C387.435 72.762 387.305 73.1442 387.045 73.4896C386.785 73.8349 386.37 74.1492 385.8 74.4324C386.49 74.7622 386.981 75.1095 387.272 75.4742C387.563 75.8351 387.709 76.2541 387.709 76.7314C387.709 77.4376 387.462 78.0021 386.97 78.425C386.477 78.8441 385.802 79.0536 384.944 79.0536C384.036 79.0536 383.338 78.8557 382.849 78.46C382.36 78.0603 382.116 77.4958 382.116 76.7663C382.116 75.7924 382.709 75.0338 383.897 74.4906C383.361 74.188 382.977 73.862 382.744 73.5128C382.511 73.1597 382.395 72.7659 382.395 72.3313C382.395 71.7144 382.622 71.2236 383.076 70.8588C383.534 70.4902 384.145 70.3059 384.909 70.3059ZM383.07 76.7896C383.07 77.2552 383.231 77.618 383.553 77.8779C383.879 78.1379 384.335 78.2679 384.921 78.2679C385.499 78.2679 385.949 78.1321 386.271 77.8605C386.593 77.5889 386.754 77.2164 386.754 76.743C386.754 76.3666 386.603 76.033 386.3 75.742C385.998 75.4471 385.47 75.1619 384.717 74.8864C384.139 75.1347 383.72 75.4102 383.46 75.7129C383.2 76.0116 383.07 76.3705 383.07 76.7896ZM384.898 71.0916C384.413 71.0916 384.032 71.208 383.757 71.4409C383.481 71.6737 383.344 71.9841 383.344 72.3721C383.344 72.729 383.458 73.0356 383.687 73.2917C383.916 73.5478 384.339 73.8038 384.956 74.0599C385.511 73.8271 385.903 73.5769 386.132 73.3091C386.364 73.0414 386.481 72.729 386.481 72.3721C386.481 71.9802 386.339 71.6698 386.056 71.4409C385.776 71.208 385.39 71.0916 384.898 71.0916ZM394.553 74.671C394.553 76.1416 394.32 77.2397 393.855 77.9653C393.393 78.6908 392.685 79.0536 391.731 79.0536C390.815 79.0536 390.118 78.6831 389.641 77.942C389.164 77.197 388.925 76.1067 388.925 74.671C388.925 73.1888 389.156 72.0888 389.618 71.371C390.08 70.6532 390.784 70.2943 391.731 70.2943C392.654 70.2943 393.354 70.6687 393.832 71.4176C394.313 72.1664 394.553 73.2509 394.553 74.671ZM389.903 74.671C389.903 75.9088 390.048 76.8109 390.339 77.3774C390.631 77.94 391.094 78.2213 391.731 78.2213C392.375 78.2213 392.84 77.9362 393.127 77.3658C393.418 76.7915 393.564 75.8933 393.564 74.671C393.564 73.4488 393.418 72.5544 393.127 71.9879C392.84 71.4176 392.375 71.1324 391.731 71.1324C391.094 71.1324 390.631 71.4137 390.339 71.9763C390.048 72.535 389.903 73.4333 389.903 74.671ZM396.561 72.9657C396.561 73.6254 396.633 74.1201 396.777 74.4499C396.92 74.7797 397.153 74.9446 397.475 74.9446C398.111 74.9446 398.43 74.285 398.43 72.9657C398.43 71.6543 398.111 70.9985 397.475 70.9985C397.153 70.9985 396.92 71.1615 396.777 71.4874C396.633 71.8133 396.561 72.3061 396.561 72.9657ZM399.227 72.9657C399.227 73.8504 399.077 74.5197 398.779 74.9737C398.484 75.4238 398.049 75.6488 397.475 75.6488C396.932 75.6488 396.509 75.418 396.206 74.9562C395.907 74.4945 395.758 73.831 395.758 72.9657C395.758 72.085 395.902 71.4215 396.189 70.9752C396.48 70.529 396.909 70.3059 397.475 70.3059C398.038 70.3059 398.47 70.5368 398.773 70.9985C399.076 71.4603 399.227 72.116 399.227 72.9657ZM401.683 76.3763C401.683 77.0398 401.755 77.5365 401.898 77.8663C402.042 78.1922 402.277 78.3552 402.603 78.3552C402.928 78.3552 403.169 78.1942 403.324 77.8721C403.479 77.5462 403.557 77.0476 403.557 76.3763C403.557 75.7129 403.479 75.222 403.324 74.9038C403.169 74.5818 402.928 74.4208 402.603 74.4208C402.277 74.4208 402.042 74.5818 401.898 74.9038C401.755 75.222 401.683 75.7129 401.683 76.3763ZM404.354 76.3763C404.354 77.2571 404.205 77.9245 403.906 78.3785C403.611 78.8286 403.177 79.0536 402.603 79.0536C402.052 79.0536 401.627 78.8228 401.328 78.361C401.033 77.8993 400.886 77.2377 400.886 76.3763C400.886 75.4956 401.029 74.8321 401.316 74.3859C401.607 73.9396 402.036 73.7165 402.603 73.7165C403.154 73.7165 403.582 73.9455 403.889 74.4033C404.199 74.8573 404.354 75.515 404.354 76.3763ZM402.853 70.4281L398.133 78.9372H397.277L401.997 70.4281H402.853Z" fill="white"/>
                              <rect x="82.9223" y="107.217" width="11.7769" height="54.1739" rx="5.88847" transform="rotate(90 82.9223 107.217)" fill="#95ABBC"/>
                              <rect x="177.088" y="107.444" width="11.3237" height="79.8619" rx="5.66185" transform="rotate(90 177.088 107.444)" fill="#0DBBFC"/>
                              <path d="M197.246 110.765C197.246 111.308 197.093 111.753 196.787 112.098C196.484 112.443 196.053 112.674 195.495 112.791V112.837C196.178 112.923 196.684 113.14 197.014 113.489C197.343 113.838 197.508 114.296 197.508 114.863C197.508 115.674 197.227 116.298 196.664 116.737C196.102 117.171 195.303 117.389 194.267 117.389C193.816 117.389 193.403 117.354 193.027 117.284C192.654 117.218 192.292 117.099 191.939 116.929V116.009C192.307 116.192 192.699 116.331 193.114 116.428C193.533 116.521 193.929 116.568 194.301 116.568C195.772 116.568 196.507 115.992 196.507 114.839C196.507 113.807 195.696 113.291 194.075 113.291H193.236V112.459H194.086C194.75 112.459 195.275 112.313 195.663 112.022C196.051 111.727 196.245 111.32 196.245 110.8C196.245 110.385 196.102 110.059 195.815 109.822C195.531 109.586 195.145 109.467 194.657 109.467C194.284 109.467 193.933 109.518 193.603 109.619C193.273 109.72 192.897 109.906 192.474 110.177L191.985 109.526C192.334 109.25 192.736 109.035 193.19 108.879C193.648 108.72 194.129 108.641 194.633 108.641C195.46 108.641 196.102 108.831 196.56 109.211C197.018 109.588 197.246 110.106 197.246 110.765ZM204.434 113.006C204.434 114.477 204.202 115.575 203.736 116.3C203.274 117.026 202.566 117.389 201.612 117.389C200.696 117.389 199.999 117.018 199.522 116.277C199.045 115.532 198.806 114.442 198.806 113.006C198.806 111.524 199.037 110.424 199.499 109.706C199.961 108.988 200.665 108.629 201.612 108.629C202.535 108.629 203.235 109.004 203.713 109.753C204.194 110.501 204.434 111.586 204.434 113.006ZM199.784 113.006C199.784 114.244 199.93 115.146 200.221 115.712C200.512 116.275 200.975 116.556 201.612 116.556C202.256 116.556 202.721 116.271 203.008 115.701C203.299 115.126 203.445 114.228 203.445 113.006C203.445 111.784 203.299 110.889 203.008 110.323C202.721 109.753 202.256 109.467 201.612 109.467C200.975 109.467 200.512 109.749 200.221 110.311C199.93 110.87 199.784 111.768 199.784 113.006ZM206.442 111.301C206.442 111.96 206.514 112.455 206.658 112.785C206.801 113.115 207.034 113.28 207.356 113.28C207.992 113.28 208.311 112.62 208.311 111.301C208.311 109.989 207.992 109.333 207.356 109.333C207.034 109.333 206.801 109.496 206.658 109.822C206.514 110.148 206.442 110.641 206.442 111.301ZM209.108 111.301C209.108 112.185 208.959 112.855 208.66 113.309C208.365 113.759 207.93 113.984 207.356 113.984C206.813 113.984 206.39 113.753 206.087 113.291C205.789 112.829 205.639 112.166 205.639 111.301C205.639 110.42 205.783 109.756 206.07 109.31C206.361 108.864 206.79 108.641 207.356 108.641C207.919 108.641 208.351 108.872 208.654 109.333C208.957 109.795 209.108 110.451 209.108 111.301ZM211.564 114.711C211.564 115.375 211.636 115.871 211.779 116.201C211.923 116.527 212.158 116.69 212.484 116.69C212.81 116.69 213.05 116.529 213.205 116.207C213.361 115.881 213.438 115.383 213.438 114.711C213.438 114.048 213.361 113.557 213.205 113.239C213.05 112.917 212.81 112.756 212.484 112.756C212.158 112.756 211.923 112.917 211.779 113.239C211.636 113.557 211.564 114.048 211.564 114.711ZM214.236 114.711C214.236 115.592 214.086 116.259 213.787 116.713C213.492 117.164 213.058 117.389 212.484 117.389C211.933 117.389 211.508 117.158 211.209 116.696C210.914 116.234 210.767 115.573 210.767 114.711C210.767 113.831 210.91 113.167 211.197 112.721C211.488 112.275 211.917 112.051 212.484 112.051C213.035 112.051 213.463 112.28 213.77 112.738C214.08 113.192 214.236 113.85 214.236 114.711ZM212.734 108.763L208.014 117.272H207.158L211.878 108.763H212.734Z" fill="white"/>
                              <rect x="82.9223" y="145.956" width="11.7769" height="54.1739" rx="5.88847" transform="rotate(90 82.9223 145.956)" fill="#95ABBC"/>
                              <rect x="414.885" y="145.885" width="11.9197" height="317.66" rx="5.95985" transform="rotate(90 414.885 145.885)" fill="white"/>
                              <path d="M433.35 156.011H432.408V149.947C432.408 149.442 432.423 148.965 432.454 148.515C432.373 148.596 432.282 148.682 432.181 148.771C432.08 148.86 431.618 149.238 430.795 149.906L430.283 149.242L432.536 147.502H433.35V156.011ZM442.232 151.745C442.232 153.216 441.999 154.314 441.534 155.039C441.072 155.765 440.364 156.128 439.409 156.128C438.494 156.128 437.797 155.757 437.32 155.016C436.843 154.271 436.604 153.181 436.604 151.745C436.604 150.263 436.835 149.163 437.297 148.445C437.758 147.727 438.463 147.368 439.409 147.368C440.333 147.368 441.033 147.743 441.51 148.491C441.991 149.24 442.232 150.325 442.232 151.745ZM437.582 151.745C437.582 152.983 437.727 153.885 438.018 154.451C438.309 155.014 438.773 155.295 439.409 155.295C440.053 155.295 440.519 155.01 440.806 154.44C441.097 153.865 441.243 152.967 441.243 151.745C441.243 150.523 441.097 149.628 440.806 149.062C440.519 148.491 440.053 148.206 439.409 148.206C438.773 148.206 438.309 148.488 438.018 149.05C437.727 149.609 437.582 150.507 437.582 151.745ZM449.053 151.745C449.053 153.216 448.82 154.314 448.355 155.039C447.893 155.765 447.185 156.128 446.231 156.128C445.315 156.128 444.618 155.757 444.141 155.016C443.664 154.271 443.425 153.181 443.425 151.745C443.425 150.263 443.656 149.163 444.118 148.445C444.58 147.727 445.284 147.368 446.231 147.368C447.154 147.368 447.854 147.743 448.332 148.491C448.813 149.24 449.053 150.325 449.053 151.745ZM444.403 151.745C444.403 152.983 444.548 153.885 444.839 154.451C445.13 155.014 445.594 155.295 446.231 155.295C446.875 155.295 447.34 155.01 447.627 154.44C447.918 153.865 448.064 152.967 448.064 151.745C448.064 150.523 447.918 149.628 447.627 149.062C447.34 148.491 446.875 148.206 446.231 148.206C445.594 148.206 445.13 148.488 444.839 149.05C444.548 149.609 444.403 150.507 444.403 151.745ZM451.061 150.04C451.061 150.699 451.133 151.194 451.277 151.524C451.42 151.854 451.653 152.019 451.975 152.019C452.611 152.019 452.93 151.359 452.93 150.04C452.93 148.728 452.611 148.072 451.975 148.072C451.653 148.072 451.42 148.235 451.277 148.561C451.133 148.887 451.061 149.38 451.061 150.04ZM453.727 150.04C453.727 150.924 453.577 151.594 453.279 152.048C452.984 152.498 452.549 152.723 451.975 152.723C451.432 152.723 451.009 152.492 450.706 152.03C450.407 151.568 450.258 150.905 450.258 150.04C450.258 149.159 450.402 148.495 450.689 148.049C450.98 147.603 451.409 147.38 451.975 147.38C452.538 147.38 452.97 147.611 453.273 148.072C453.576 148.534 453.727 149.19 453.727 150.04ZM456.183 153.45C456.183 154.114 456.255 154.61 456.398 154.94C456.542 155.266 456.777 155.429 457.103 155.429C457.428 155.429 457.669 155.268 457.824 154.946C457.979 154.62 458.057 154.122 458.057 153.45C458.057 152.787 457.979 152.296 457.824 151.978C457.669 151.656 457.428 151.495 457.103 151.495C456.777 151.495 456.542 151.656 456.398 151.978C456.255 152.296 456.183 152.787 456.183 153.45ZM458.854 153.45C458.854 154.331 458.705 154.998 458.406 155.452C458.111 155.902 457.677 156.128 457.103 156.128C456.552 156.128 456.127 155.897 455.828 155.435C455.533 154.973 455.386 154.312 455.386 153.45C455.386 152.569 455.529 151.906 455.816 151.46C456.107 151.014 456.536 150.79 457.103 150.79C457.654 150.79 458.082 151.019 458.389 151.477C458.699 151.931 458.854 152.589 458.854 153.45ZM457.353 147.502L452.633 156.011H451.777L456.497 147.502H457.353Z" fill="white"/>
                              <rect x="82.9223" y="184.695" width="11.7769" height="54.1739" rx="5.88847" transform="rotate(90 82.9223 184.695)" fill="#95ABBC"/>
                              <rect x="351.115" y="184.922" width="11.3237" height="253.889" rx="5.66186" transform="rotate(90 351.115 184.922)" fill="#65E4A3"/>
                              <path d="M367.078 194.75L370.605 187.132H365.966V186.241H371.629V187.015L368.148 194.75H367.078ZM375.482 189.553C376.378 189.553 377.082 189.776 377.595 190.222C378.111 190.664 378.369 191.272 378.369 192.044C378.369 192.925 378.087 193.615 377.525 194.116C376.966 194.616 376.194 194.867 375.208 194.867C374.25 194.867 373.518 194.713 373.014 194.407V193.475C373.286 193.65 373.623 193.788 374.027 193.889C374.43 193.986 374.828 194.034 375.22 194.034C375.903 194.034 376.432 193.873 376.809 193.551C377.189 193.229 377.379 192.763 377.379 192.154C377.379 190.967 376.652 190.373 375.197 190.373C374.828 190.373 374.335 190.43 373.718 190.542L373.218 190.222L373.538 186.241H377.769V187.132H374.364L374.149 189.687C374.595 189.597 375.039 189.553 375.482 189.553ZM380.47 188.779C380.47 189.438 380.541 189.933 380.685 190.263C380.829 190.593 381.061 190.757 381.383 190.757C382.02 190.757 382.338 190.098 382.338 188.779C382.338 187.467 382.02 186.811 381.383 186.811C381.061 186.811 380.829 186.974 380.685 187.3C380.541 187.626 380.47 188.119 380.47 188.779ZM383.135 188.779C383.135 189.663 382.986 190.333 382.687 190.787C382.392 191.237 381.958 191.462 381.383 191.462C380.84 191.462 380.417 191.231 380.115 190.769C379.816 190.307 379.667 189.644 379.667 188.779C379.667 187.898 379.81 187.234 380.097 186.788C380.388 186.342 380.817 186.119 381.383 186.119C381.946 186.119 382.379 186.35 382.681 186.811C382.984 187.273 383.135 187.929 383.135 188.779ZM385.591 192.189C385.591 192.853 385.663 193.349 385.807 193.679C385.95 194.005 386.185 194.168 386.511 194.168C386.837 194.168 387.078 194.007 387.233 193.685C387.388 193.359 387.466 192.86 387.466 192.189C387.466 191.526 387.388 191.035 387.233 190.717C387.078 190.395 386.837 190.234 386.511 190.234C386.185 190.234 385.95 190.395 385.807 190.717C385.663 191.035 385.591 191.526 385.591 192.189ZM388.263 192.189C388.263 193.07 388.113 193.737 387.815 194.191C387.52 194.641 387.085 194.867 386.511 194.867C385.96 194.867 385.535 194.636 385.236 194.174C384.942 193.712 384.794 193.051 384.794 192.189C384.794 191.308 384.938 190.645 385.225 190.199C385.516 189.753 385.945 189.529 386.511 189.529C387.062 189.529 387.491 189.758 387.797 190.216C388.108 190.67 388.263 191.328 388.263 192.189ZM386.761 186.241L382.041 194.75H381.186L385.906 186.241H386.761Z" fill="white"/>
                              <circle cx="18.9852" cy="18.8431" r="4.71077" fill="#FC5B00"/>
                              <circle cx="37.8282" cy="18.8431" r="4.71077" fill="#ECAA00"/>
                              <circle cx="56.6713" cy="18.8431" r="4.71077" fill="#009D10"/>
                          </g>
                      </g>
                      <defs>
                          <filter id="filter0_b_64_816" x="-68.5686" y="-68.7107" width="631.279" height="369.32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                              <feGaussianBlur in="BackgroundImageFix" stdDeviation="34.3553"/>
                              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_64_816"/>
                              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_64_816" result="shape"/>
                          </filter>
                          <clipPath id="clip0_64_816">
                              <rect x="0.14209" width="493.858" height="231.898" rx="15.0305" fill="white"/>
                          </clipPath>
                      </defs>
                  </svg>
                      <div className="flex justify-between mt-6">
                          <svg width="193" height="166" viewBox="0 0 193 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_b_48_376)">
                                  <rect x="0.215698" y="0.664978" width="192.175" height="165.335" rx="15.0305" fill="white" fill-opacity="0.18"/>
                              </g>
                              <ellipse cx="21.1133" cy="18.6005" rx="4.71999" ry="4.75784" fill="#FC5B00"/>
                              <ellipse cx="39.9933" cy="18.6005" rx="4.71999" ry="4.75784" fill="#ECAA00"/>
                              <ellipse cx="58.8732" cy="18.6005" rx="4.71999" ry="4.75784" fill="#009D10"/>
                              <rect width="9.30457" height="23.2668" rx="4.65228" transform="matrix(1 0 0 -1 24.9086 145.528)" fill="#0DBBFC"/>
                              <rect width="9.30457" height="13.4841" rx="4.65228" transform="matrix(1 0 0 -1 43.5178 135.745)" fill="#0DBBFC"/>
                              <rect x="62.1268" y="59.8639" width="9.30457" height="62.3972" rx="4.65228" fill="#0DBBFC"/>
                              <rect x="80.736" y="79.1648" width="9.30457" height="43.0964" rx="4.65229" fill="#0DBBFC"/>
                              <rect x="99.3452" y="39.2411" width="9.30457" height="83.02" rx="4.65229" fill="#95ABBC"/>
                              <rect x="117.954" y="63.5654" width="9.30457" height="58.6957" rx="4.65229" fill="#0DBBFC"/>
                              <rect x="136.563" y="52.1965" width="9.30456" height="70.0647" rx="4.65228" fill="#0DBBFC"/>
                              <rect x="155.173" y="90.2693" width="9.30456" height="31.9918" rx="4.65228" fill="#0DBBFC"/>
                              <defs>
                                  <filter id="filter0_b_48_376" x="-68.495" y="-68.0457" width="329.596" height="302.756" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="34.3553"/>
                                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48_376"/>
                                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48_376" result="shape"/>
                                  </filter>
                              </defs>
                          </svg>
                          <svg width="262" height="166" viewBox="0 0 262 166" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g filter="url(#filter0_b_64_1015)">
                                  <rect x="0.0405273" y="0.664978" width="261.959" height="165.335" rx="14.1323" fill="white" fill-opacity="0.2"/>
                                  <rect x="226.041" y="68.5326" width="8.00001" height="72" rx="4" transform="rotate(90 226.041 68.5326)" fill="#95ABBC"/>
                                  <rect x="222.041" y="90.665" width="8.00001" height="68" rx="4" transform="rotate(90 222.041 90.665)" fill="#95ABBC"/>
                                  <rect x="230.041" y="112.797" width="8.00001" height="76" rx="4" transform="rotate(90 230.041 112.797)" fill="#95ABBC"/>
                              </g>
                              <ellipse cx="20.9421" cy="18" rx="4.8" ry="5" fill="#FC5B00"/>
                              <ellipse cx="40.1422" cy="18" rx="4.8" ry="5" fill="#ECAA00"/>
                              <ellipse cx="59.342" cy="18" rx="4.8" ry="5" fill="#009D10"/>
                              <defs>
                                  <filter id="filter0_b_64_1015" x="-133.086" y="-132.462" width="528.213" height="431.589" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                      <feGaussianBlur in="BackgroundImageFix" stdDeviation="66.5635"/>
                                      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_64_1015"/>
                                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_64_1015" result="shape"/>
                                  </filter>
                                  <clipPath id="clip0_64_1015">
                                      <rect width="93.0378" height="93.0378" fill="white" transform="translate(28.3052 47.7727)"/>
                                  </clipPath>
                              </defs>
                          </svg>
                      </div>
                </div>
              </div>
              {/* footer */}
              <div className="flex justify-center after:bg-gradient-to-r from-main via-transparent to-main after:absolute after:w-full after:h-10">
                  <img src={logos} />
              </div>
          </div>
          {/* 2-nd block */}
          <div className="py-20 px-40 bg-body">
              <div>
                  <p className="text-gray w-full flex justify-center text-xl font-normal font-open-sans">Our Services</p>
                  <p className="text-black font-open-sans text-5xl text-center mt-3">Handshake infographic mass market crowdfunding iteration.</p>
              </div>
              <div className="flex justify-between mt-20">
                  <div className="w-28pr">
                      <img src={body1}/>
                      <p className="font-open-sans text-2xl font-normal mt-6">Cool feature title</p>
                      <p className="font-open-sans text-xl text-gray font-normal mt-3">Learning curve network effects return on investment.</p>
                      <div className="flex items-center mt-7 w-max border-b pb-2">
                          <p className="font-open-sans text-xl text-main font-bold mr-4">Explore page</p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 8H15" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M8 1L15 8L8 15" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </div>
                  </div>
                  <div className="w-28pr">
                      <img src={body2}/>
                      <p className="font-open-sans text-2xl font-normal mt-6">Even cooler feature</p>
                      <p className="font-open-sans text-xl text-gray font-normal mt-3">Learning curve network effects return on investment.</p>
                      <div className="flex items-center mt-7 w-max border-b pb-2">
                          <p className="font-open-sans text-xl text-main font-bold mr-4">Explore page</p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 8H15" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M8 1L15 8L8 15" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </div>
                  </div>
                  <div className="w-28pr">
                      <img src={body3}/>
                      <p className="font-open-sans text-2xl font-normal mt-6">Cool feature title</p>
                      <p className="font-open-sans text-xl text-gray font-normal mt-3">Learning curve network effects return on investment.</p>
                      <div className="flex items-center mt-7 w-max border-b pb-2">
                          <p className="font-open-sans text-xl text-main font-bold mr-4">Explore page</p>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1 8H15" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M8 1L15 8L8 15" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
          {/* 3-rd block */}
          <div className="py-20 px-40 flex justify-between items-center">
              <img src={body4} className="w-1/2"/>
              <div className="w-2/5">
                  <p className="font-manrope text-main text-4xl">We connect our customers with the best, and help them keep up-and stay open.</p>
                  <div className="flex flex-row items-center mt-10">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18" cy="18" r="18" fill="#0A2640"/>
                          <path d="M26 12L15 23L10 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className="font-open-sans text-main text-xl ml-7">We connect our customers with the best.</p>
                  </div>
                  <div className="flex flex-row items-center mt-6">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18" cy="18" r="18" fill="#0A2640"/>
                          <path d="M26 12L15 23L10 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className="font-open-sans text-main text-xl ml-7">Advisor success customer launch party.</p>
                  </div>
                  <div className="flex flex-row items-center mt-6 mb-20">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="18" cy="18" r="18" fill="#0A2640"/>
                          <path d="M26 12L15 23L10 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className="font-open-sans text-main text-xl ml-7">Business-to-consumer long tail.</p>
                  </div>
                  <a className="font-open-sans text-xl text-white font-bold bg-main py-4 px-14 rounded-56px">Start now</a>
              </div>
          </div>
          {/* 4-th block */}
          <div className="px-40 pb-20 flex justify-between items-center">
              <div className="w-1/2">
                  <p className="font-manrope text-main text-4xl">We connect our customers with the best, and help them keep up-and stay open.</p>
                  <div className="flex flex-row mt-10 bg-main py-4 rounded shadow-3xl items-center">
                      <svg className="ml-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.24 12.24C21.3658 11.1142 21.9983 9.58722 21.9983 7.99504C21.9983 6.40285 21.3658 4.87588 20.24 3.75004C19.1142 2.62419 17.5872 1.9917 15.995 1.9917C14.4028 1.9917 12.8758 2.62419 11.75 3.75004L5 10.5V19H13.5L20.24 12.24Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M16 8L2 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M17.5 15H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p className="font-open-sans text-main text-sm ml-7 text-white font-semibold">We connect our customers with the best.</p>
                  </div>
                  <div className="flex flex-row items-center mt-6 py-4 rounded shadow-3xl items-center">
                      <svg className="ml-5" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_62_553)">
                              <path d="M1.77502 12.6543C1.77502 12.6543 5.77502 4.6543 12.775 4.6543C19.775 4.6543 23.775 12.6543 23.775 12.6543C23.775 12.6543 19.775 20.6543 12.775 20.6543C5.77502 20.6543 1.77502 12.6543 1.77502 12.6543Z" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12.775 15.6543C14.4319 15.6543 15.775 14.3112 15.775 12.6543C15.775 10.9974 14.4319 9.6543 12.775 9.6543C11.1182 9.6543 9.77502 10.9974 9.77502 12.6543C9.77502 14.3112 11.1182 15.6543 12.775 15.6543Z" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                              <clipPath id="clip0_62_553">
                                  <rect width="24" height="24" fill="white" transform="translate(0.775024 0.654297)"/>
                              </clipPath>
                          </defs>
                      </svg>
                      <p className="font-open-sans text-main text-sm ml-7 font-semibold">Advisor success customer launch party.</p>
                  </div>
                  <div className="flex flex-row items-center mt-6 mb-20 py-4 rounded shadow-3xl items-center">
                      <svg className="ml-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_62_578)">
                              <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 1V3" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M12 21V23" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M4.22 4.21997L5.64 5.63997" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M18.36 18.3601L19.78 19.7801" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M1 12H3" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M21 12H23" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M4.22 19.7801L5.64 18.3601" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M18.36 5.63997L19.78 4.21997" stroke="#0A2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </g>
                          <defs>
                              <clipPath id="clip0_62_578">
                                  <rect width="24" height="24" fill="white"/>
                              </clipPath>
                          </defs>
                      </svg>
                      <p className="font-open-sans text-main text-sm ml-7 font-semibold">Business-to-consumer long tail.</p>
                  </div>
              </div>
              <img src={body5} className="w-2/5"/>
          </div>
          {/* 5-th block */}
          <div className="bg-main py-24 pr-25 pl-37">
              <div className="flex justify-between">
                  <p className="font-manrope text-white text-5xl w-3/5">An enterprise template to ramp up your company website</p>
                  <div className="flex items-end">
                      <div className="bg-white px-4.5 pt-4.25 pb-4 rounded-full text-main">
                          <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M28.5 18L7.5 18" stroke="#0A2640" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M18 28.5L7.5 18L18 7.5" stroke="#0A2640" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </div>
                      <div className="bg-white px-4.5 pt-4 pb-4.25 rounded-full text-main ml-10">
                          <svg width="36" height="39" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.5 21H28.5" stroke="#0A2640" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M18 10.5L28.5 21L18 31.5" stroke="#0A2640" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </div>
                  </div>
              </div>
              <div className="mt-14 flex justify-between">
                  <div className="w-30pr p-10 bg-white rounded-xl h-fit">
                      <p className="font-open-sans text-2xl ">“Buyer buzz partner network disruptive non-disclosure agreement business”</p>
                      <div className="flex mt-10 items-center">
                          <img src={avatar1} className="w-14"/>
                          <div className="ml-4">
                              <p className="font-open-sans font-bold text-main">Albus Dumbledore</p>
                              <p className="mt-1.5 font-open-sans text-main text-sm">Manager @ Howarts</p>
                          </div>
                      </div>
                  </div>
                  <div className="w-30pr p-10 bg-white rounded-xl">
                      <p className="font-open-sans text-2xl ">“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”</p>
                      <div className="flex mt-10 items-center">
                          <img src={avatar2} className="w-14"/>
                          <div className="ml-4">
                              <p className="font-open-sans font-bold text-main">Severus Snape</p>
                              <p className="mt-1.5 font-open-sans text-main text-sm">Manager @ Slytherin</p>
                          </div>
                      </div>
                  </div>
                  <div className="w-30pr p-10 bg-white rounded-xl">
                      <p className="font-open-sans text-2xl ">“Release facebook responsive web design business model canvas seed money monetization.”</p>
                      <div className="flex mt-10 items-center">
                          <img src={avatar3} className="w-14"/>
                          <div className="ml-4">
                              <p className="font-open-sans font-bold text-main">Harry Potter</p>
                              <p className="mt-1.5 font-open-sans text-main text-sm">Team Leader @ Gryffindor</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          {/* 6-th block */}
          <div className="mt-31 px-37 pb-39">
              <img src={bg1} />
              <div className="mt-14 flex justify-between">
                  <p className="w-5/12 font-manrope text-4xl">We connect our customers with the best, and help them keep up-and stay open.</p>
                  <div className="w-5/12">
                      <div className="flex justify-between pb-4 border-b border-gray">
                          <p className="font-open-sans text-xl">We connect our customers with the best?</p>
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="14" cy="14" r="14" fill="#0A2640"/>
                              <path d="M8 12L14 18L20 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </div>
                      <div className="flex justify-between pb-4 border-b border-gray mt-8">
                          <p className="font-open-sans text-xl">Android research & development rockstar? </p>
                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="14" cy="14" r="14" fill="#0A2640"/>
                              <path d="M8 12L14 18L20 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </div>
                  </div>
              </div>
          </div>
          {/* 7-th block */}
          <div className="w-full flex flex-col justify-center items-center">
              <p className="text-gray text-xl font-normal font-open-sans">Our Blog</p>
              <p className="text-black font-open-sans text-5xl text-center mt-3 w-2/3">Value proposition accelerator product management venture</p>
              <div className="mt-19 mx-50">
                  <div className="w-full flex justify-between">
                      <div className="w-30pr">
                          <img src={block1}/>
                          <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                          <p className="font-open-sans text-xl mt-3 h-90px">Pitch termsheet backing validation focus release.</p>
                          <div className="flex items-center mt-5">
                              <img src={avatar1} className="w-8" />
                              <span className="ml-3 text-black font-open-sans">Chandler Bing</span>
                          </div>
                      </div>
                      <div className="w-30pr">
                          <img src={block2}/>
                          <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                          <p className="font-open-sans text-xl mt-3">Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                          <div className="flex items-center mt-5">
                              <img src={avatar2} className="w-8" />
                              <span className="ml-3 text-black font-open-sans">Rachel Green</span>
                          </div>
                      </div>
                      <div className="w-30pr">
                          <img src={block3}/>
                          <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                          <p className="font-open-sans text-xl mt-3">Beta prototype sales iPad gen-z marketing network effects value proposition</p>
                          <div className="flex items-center mt-5">
                              <img src={avatar3} className="w-8" />
                              <span className="ml-3 text-black font-open-sans">Monica Geller</span>
                          </div>
                      </div>
                  </div>
                  <div className="mt-25 mb-35 flex justify-center w-full">
                      <a className="font-open-sans font-semibold text-xl py-4 px-14 rounded-56px border-2 border-main">Load more</a>
                  </div>
              </div>
          </div>
          {/* 8-th block */}
          <div className="mx-25 mb-21 bg-main rounded-xl bg-[url('./img/Ellipse2.svg')] bg-no-repeat bg-right-top">
              <div className="pt-18 pb-18 w-full flex items-center flex-col">
                  <p className="font-manrope text-white text-5xl w-3/5 text-center">An enterprise template to ramp up your company website</p>
                  <div className="flex flex-row items-center mt-12 justify-center">
                      <input className="py-3 w-80 rounded-56px px-8 placeholder:text-black placeholder:font-open-sans placeholder:text-xl" placeholder="Your email address"/>
                      <a className="text-main bg-green-btn px-14 py-3 rounded-56px font-open-sans font-bold text-xl ml-6">Start now</a>
                  </div>
              </div>
          </div>
          {/* 9-th block */}
          <div className="pt-25 pb-29 px-25 flex flex-row">
              <div className="w-1/4">
                  <div className="flex flex-row items-center">
                      <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 15.5H16.2851C21.0522 15.5 24.9167 19.3645 24.9167 24.1316C24.9167 28.8987 21.0522 32.7632 16.2851 32.7632H0V15.5Z" fill="#0A2640"/>
                          <path d="M0 0.394775H10.8597C14.435 0.394775 17.3333 3.29314 17.3333 6.86846C17.3333 10.4438 14.435 13.3421 10.8597 13.3421H0V0.394775Z" fill="#0A2640"/>
                      </svg>
                      <p className="font-manrope text-main text-logo font-bold ml-4">Boldo</p>
                  </div>
                  <p className="font-open-sans text-gray mt-10">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                  <p className="font-open-sans text-gray mt-16">All rights reserved.</p>
              </div>
              <div className="w-3/4 flex flex-row justify-end mt-4">
                  <div className="w-1/4 flex flex-col font-open-sans text-gray text-xl text-normal">
                      <a className="font-open-sans text-main font-bold text-xl">Landings</a>
                      <div className="mt-8 flex flex-col justify-between h-full">
                          <a>Home</a>
                          <a>Products</a>
                          <a>Services</a>
                      </div>
                  </div>
                  <div className="w-1/4 flex flex-col font-open-sans text-gray text-xl text-normal">
                      <a className="font-open-sans text-main font-bold text-xl">Company</a>
                      <div className="mt-8 flex flex-col justify-between h-full">
                          <a>Home</a>
                          <a>Careers <span className="text-main font-open-sans text-sm bg-green-btn py-0.5 px-3.5 rounded-3xl font-bold align-middle">Hiring!</span></a>
                          <a>Services</a>
                      </div>
                  </div>
                  <div className="w-1/4 flex flex-col font-open-sans text-gray text-xl text-normal">
                      <a className="font-open-sans text-main font-bold text-xl">Resources</a>
                      <div className="mt-8 flex flex-col justify-between h-full">
                          <a>Blog</a>
                          <a>Products</a>
                          <a>Services</a>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Main;
