import React, { FC } from "react";

export const GithubLogo: FC<{ bigger?: boolean }> = ({ bigger = false }) => {
  return (
    <>
      {bigger ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none">
          <path
            d="M12 0.459961C5.37 0.459961 0 5.83096 0 12.46C0 17.77 3.435 22.255 8.205 23.845C8.805 23.951 9.03 23.591 9.03 23.275C9.03 22.99 9.015 22.045 9.015 21.041C6 21.596 5.22 20.306 4.981 19.631C4.846 19.286 4.261 18.221 3.751 17.936C3.33 17.711 2.731 17.156 3.735 17.141C4.68 17.126 5.355 18.011 5.58 18.371C6.66 20.187 8.385 19.677 9.075 19.361C9.18 18.581 9.495 18.057 9.84 17.757C7.17 17.457 4.38 16.422 4.38 11.832C4.38 10.527 4.845 9.44696 5.61 8.60796C5.49 8.30796 5.07 7.07796 5.73 5.42796C5.73 5.42796 6.735 5.11296 9.03 6.65796C9.99 6.38796 11.01 6.25296 12.03 6.25296C13.049 6.25296 14.07 6.38796 15.029 6.65796C17.324 5.09796 18.329 5.42796 18.329 5.42796C18.989 7.07796 18.569 8.30796 18.449 8.60796C19.214 9.44796 19.679 10.513 19.679 11.832C19.679 16.437 16.874 17.457 14.205 17.757C14.639 18.132 15.015 18.852 15.015 19.977C15.015 21.582 14.999 22.872 14.999 23.277C14.999 23.592 15.224 23.967 15.824 23.847C18.2069 23.0431 20.2776 21.512 21.7444 19.4691C23.2112 17.4263 24.0001 14.9748 24 12.46C24 5.82996 18.63 0.459961 12 0.459961Z"
            fill="white"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none">
          <path
            d="M8.19 0.560059C3.99 0.560059 0.589996 3.96006 0.589996 8.16006C0.589996 11.5201 2.79 14.3601 5.79 15.3601C6.19 15.4401 6.31 15.2001 6.31 15.0001V13.7201C4.19 14.1601 3.75 12.6801 3.75 12.6801C3.39 11.8401 2.91 11.6001 2.91 11.6001C2.23 11.1201 2.95 11.1601 2.95 11.1601C3.71 11.2001 4.11 11.9601 4.11 11.9601C4.79 13.1201 5.91 12.8001 6.31 12.6001C6.39 12.1201 6.59 11.7601 6.79 11.5601C5.11 11.3601 3.31 10.7201 3.31 7.80006C3.31 6.96006 3.59 6.32006 4.11 5.76006C4.03 5.56006 3.79 4.80006 4.19 3.76006C4.19 3.76006 4.83 3.56006 6.27 4.56006C6.87 4.40006 7.51 4.28006 8.19 4.28006C8.83 4.28006 9.51 4.36006 10.07 4.56006C11.51 3.60006 12.15 3.76006 12.15 3.76006C12.55 4.80006 12.31 5.60006 12.23 5.76006C12.71 6.28006 13.03 6.96006 13.03 7.80006C13.03 10.7201 11.23 11.3601 9.55 11.5601C9.83 11.8001 10.07 12.2401 10.07 12.9601V15.0401C10.07 15.2401 10.23 15.4801 10.59 15.4001C13.59 14.3601 15.79 11.5201 15.79 8.16006C15.79 3.96006 12.39 0.560059 8.19 0.560059Z"
            fill="#B5BFCA"
          />
        </svg>
      )}
    </>
  );
};