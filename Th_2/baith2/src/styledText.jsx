const StyledText = styled.h2`
  color: ${(props) => {
    if (props.numClicked % 2 === 0) {
      return "blue";
    }
    return "red";
  }};
`;