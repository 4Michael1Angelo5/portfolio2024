import Presentation from './presentationComponent'

// this component displays information about a specific 
// portfolio item

const PortfolioDetail = ({ project, beerMe }) => {

  return (
    <Presentation
    project = {project}
    beerMe={beerMe}
    />
  );
};

export default PortfolioDetail;
