import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import styled from "styled-components";

export default function SkeletonCard() {
    return (
        <>
            {Array(8)
                .fill(0)
                .map((p, i) => (
                    <SkeletonCardContainer key={i}>
                        <div>
                            <Skeleton duration={1} height={138} width={111} />
                        </div>
                        <SkeletonNameAndPrice>
                            <Skeleton duration={1} height={30} width={192} />
                        </SkeletonNameAndPrice>
                        <SkeletonDescription>
                            <Skeleton duration={1} height={45} width={192} />
                        </SkeletonDescription>
                    </SkeletonCardContainer>
                ))
            }
        </>
    );
}

const SkeletonCardContainer = styled.div`
    height: 285px;
    width: 217.56px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    background-color: #FFF;
    margin-bottom: 31px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 18px;
    z-index: -1;
`;

const SkeletonNameAndPrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-left: 14px;
    padding-right: 12px;
    margin-top: 14px;
`;

const SkeletonDescription = styled.div`
    margin-top: 8px;
    padding-left: 14px;
    padding-right: 12px;
`;