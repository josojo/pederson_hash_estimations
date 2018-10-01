pragma solidity ^0.4.24;

import "./CurveBabyJubJubExtended.sol";


contract CurveBabyJubJubHelperExtended {
    function pointAdd(uint256 _x1, uint256 _y1, uint256 _x2, uint256 _y2) public view returns (uint256 x3, uint256 y3) {
        uint256[2] memory i = [_x1, _y1];

        uint256[4] memory input = CurveBabyJubJubExtended.point2etec(i);
        uint256[4] memory res = CurveBabyJubJubExtended.pointAdd(input, input);
        uint256[2] memory resPoint = CurveBabyJubJubExtended.etec2point(res);
        (x3, y3) = (resPoint[0], resPoint[1]);
    }

    function pointMul(uint256 _x1, uint256 _y1, uint256 _d) public view returns (uint256 x2, uint256 y2) {
        uint256[2] memory i = [_x1, _y1];
        uint256[4] memory input = CurveBabyJubJubExtended.point2etec(i);
        uint256[4] memory res = CurveBabyJubJubExtended.pointMul(input, _d);
        uint256[2] memory resPoint = CurveBabyJubJubExtended.etec2point(res);
        (x2, y2) = (resPoint[0], resPoint[1]);
    }

    function pointDouble(uint256 _x1, uint256 _y1) public view returns (uint256 x2, uint256 y2) {
        uint256[2] memory i = [_x1, _y1];
        uint256[4] memory input = CurveBabyJubJubExtended.point2etec(i);
        uint256[4] memory res = CurveBabyJubJubExtended.pointDouble(input);
        uint256[2] memory resPoint = CurveBabyJubJubExtended.etec2point(res);
        (x2, y2) = (resPoint[0], resPoint[1]);
    }
}