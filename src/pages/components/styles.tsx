import styled from 'styled-components';
const colors = {
  red: '#ff3c41',
};

export const Spinner = styled.div`
svg {
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;
  
  circle {
    stroke: #93bfec;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`;

export const Error = styled.div`
  color: ${colors.red}
  font-size: 20px;
  text-align: center;
`