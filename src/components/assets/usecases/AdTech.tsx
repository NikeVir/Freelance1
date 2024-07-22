import * as React from "react";
const AdTech = (props:any) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={9} fill="url(#paint0_linear_40_601)" />
    <path
      d="M29.6621 12C26.8006 12 24.4031 13.9636 23.5935 16.6427H13.397C13.0346 16.6431 12.6871 16.7917 12.4309 17.0559C12.1746 17.3201 12.0304 17.6783 12.03 18.0519V22.2021C12.03 22.6016 12.1953 22.9578 12.4551 23.2149C12.3132 23.3441 12.1994 23.5028 12.1209 23.6805C12.0425 23.8582 12.0013 24.051 12 24.2462V28.3964C12.0009 28.5889 12.0405 28.7791 12.1163 28.955C12.192 29.1309 12.3023 29.2887 12.4401 29.4185C12.3023 29.5483 12.192 29.7061 12.1163 29.882C12.0405 30.0579 12.0009 30.2481 12 30.4406V34.5908C12 35.3682 12.6129 36 13.3669 36H30.1608C30.9149 36 31.5278 35.3682 31.5278 34.5908V30.4406C31.5269 30.2481 31.4873 30.0579 31.4115 29.882C31.3358 29.7061 31.2255 29.5483 31.0877 29.4185C31.2255 29.2887 31.3358 29.1309 31.4115 28.955C31.4873 28.7791 31.5269 28.5889 31.5278 28.3964V24.8424C34.1355 24.0139 36.0492 21.5377 36.0492 18.5815C36.0464 16.8363 35.3725 15.1635 34.1752 13.9297C32.9779 12.696 31.355 12.002 29.6621 12ZM29.6621 12.7743C31.1555 12.7763 32.5871 13.3888 33.6431 14.4774C34.699 15.5661 35.2932 17.042 35.2951 18.5815C35.2932 20.121 34.699 21.5969 33.6431 22.6855C32.5871 23.7742 31.1555 24.3866 29.6621 24.3887C28.1688 24.3866 26.7371 23.7742 25.6812 22.6855C24.6252 21.5969 24.0311 20.121 24.0291 18.5815C24.0311 17.042 24.6252 15.5661 25.6812 14.4774C26.7371 13.3888 28.1688 12.7763 29.6621 12.7743ZM29.6651 15.0972C28.7608 15.0972 27.9076 15.458 27.2677 16.1192C26.6364 16.7752 26.2828 17.6624 26.2845 18.5865C26.2862 19.5106 26.643 20.3964 27.2767 21.0499C27.3114 21.0858 27.3526 21.1141 27.398 21.1332C27.4434 21.1524 27.4921 21.162 27.5411 21.1614C27.6406 21.162 27.7362 21.1219 27.807 21.0499L29.4143 19.3883L28.881 18.8417L27.5591 20.2091C27.2668 19.8059 27.089 19.3269 27.0457 18.8255C27.0023 18.3242 27.0951 17.8203 27.3136 17.3702C27.5321 16.9201 27.8678 16.5416 28.2831 16.2769C28.6984 16.0122 29.1769 15.8718 29.6651 15.8715H29.6741L29.6772 15.0972H29.6651ZM31.7862 16.0015C31.6862 16.0009 31.5901 16.041 31.5188 16.113L29.9265 17.7623L30.4568 18.3089L31.7651 16.957C32.1061 17.4232 32.2909 17.9884 32.2909 18.5815C32.2909 19.3062 32.0175 19.9845 31.5218 20.4955C31.011 21.0252 30.3231 21.2962 29.6035 21.2946L29.5885 22.0689H29.6591C30.5664 22.0689 31.4166 21.7065 32.0565 21.0437C32.6934 20.384 33.0434 19.5106 33.0419 18.5784C33.0427 18.1208 32.9555 17.6676 32.7853 17.245C32.6151 16.8223 32.3654 16.4387 32.0505 16.1161C32.0162 16.0796 31.9752 16.0507 31.9297 16.031C31.8843 16.0113 31.8354 16.0013 31.7862 16.0015ZM13.397 17.417H23.3922C23.3205 17.8008 23.2823 18.1906 23.278 18.5815C23.278 20.2122 23.8774 21.6864 24.8328 22.837H13.397C13.2336 22.837 13.077 22.7701 12.9615 22.651C12.846 22.532 12.7811 22.3705 12.7811 22.2021V18.0519C12.7811 17.8835 12.846 17.722 12.9615 17.6029C13.077 17.4839 13.2336 17.417 13.397 17.417ZM14.6347 19.7398V20.5141H20.6433V19.7398H14.6347ZM13.3669 23.6113H25.5958C26.7325 24.6067 28.1737 25.1562 29.6651 25.163C30.0467 25.163 30.4147 25.115 30.7767 25.0484V28.3964C30.7767 28.5648 30.7118 28.7263 30.5963 28.8454C30.4808 28.9645 30.3242 29.0314 30.1608 29.0314H13.3669C13.2036 29.0314 13.047 28.9645 12.9315 28.8454C12.816 28.7263 12.7511 28.5648 12.7511 28.3964V24.2462C12.7511 24.0778 12.816 23.9163 12.9315 23.7973C13.047 23.6782 13.2036 23.6113 13.3669 23.6113ZM28.178 25.8568C28.0585 25.8568 27.9439 25.9057 27.8594 25.9928C27.7749 26.08 27.7274 26.1981 27.7274 26.3213C27.7274 26.4445 27.7749 26.5627 27.8594 26.6498C27.9439 26.737 28.0585 26.7859 28.178 26.7859C28.2372 26.7859 28.2958 26.7739 28.3505 26.7505C28.4051 26.7272 28.4548 26.693 28.4967 26.6498C28.5385 26.6067 28.5717 26.5555 28.5944 26.4991C28.617 26.4428 28.6287 26.3823 28.6287 26.3213C28.6287 26.2603 28.617 26.1999 28.5944 26.1435C28.5717 26.0872 28.5385 26.036 28.4967 25.9928C28.4548 25.9497 28.4051 25.9155 28.3505 25.8921C28.2958 25.8688 28.2372 25.8568 28.178 25.8568ZM15.0103 25.9342V26.7085H21.0188V25.9342H15.0103ZM13.3669 29.8057H30.1608C30.2417 29.8057 30.3218 29.8221 30.3965 29.854C30.4712 29.8859 30.5391 29.9327 30.5963 29.9916C30.6535 30.0506 30.6989 30.1206 30.7298 30.1976C30.7608 30.2746 30.7767 30.3572 30.7767 30.4406V34.5908C30.7767 34.7592 30.7118 34.9207 30.5963 35.0397C30.4808 35.1588 30.3242 35.2257 30.1608 35.2257H13.3669C13.2036 35.2257 13.047 35.1588 12.9315 35.0397C12.816 34.9207 12.7511 34.7592 12.7511 34.5908V30.4406C12.7511 30.3572 12.767 30.2746 12.7979 30.1976C12.8289 30.1206 12.8743 30.0506 12.9315 29.9916C12.9886 29.9327 13.0565 29.8859 13.1313 29.854C13.206 29.8221 13.2861 29.8057 13.3669 29.8057ZM28.136 32.0511C28.0167 32.0515 27.9025 32.1006 27.8183 32.1877C27.7341 32.2748 27.6868 32.3927 27.6868 32.5157C27.6868 32.6389 27.7343 32.7571 27.8188 32.8442C27.9033 32.9313 28.0179 32.9803 28.1375 32.9803C28.257 32.9803 28.3716 32.9313 28.4561 32.8442C28.5406 32.7571 28.5881 32.6389 28.5881 32.5157C28.5881 32.3925 28.5406 32.2743 28.4561 32.1872C28.3716 32.1 28.257 32.0511 28.1375 32.0511H28.136ZM15.0103 32.1285V32.9028H21.0188V32.1285H15.0103Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_40_601"
        x1={48}
        y1={48}
        x2={-9.11569}
        y2={31.4398}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FB9400" />
        <stop offset={1} stopColor="#FFAB38" />
      </linearGradient>
    </defs>
  </svg>
);
export default AdTech;
