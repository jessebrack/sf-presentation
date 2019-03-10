import styled from 'styled-components';

const url = props => {
    if (props.src) {
        return `
			background-image: url(${props.src});
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
		`;
    }
};

const Background = styled.div`
    ${url}
    height: 100%;
    width: 100%;
`;

export default Background;
