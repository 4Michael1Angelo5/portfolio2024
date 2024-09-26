// ------------------Sangaku 13-----------------------
import sangaku13 from "./images/Sangaku13/sangaku13.png"
import SQ from './images/Sangaku13/SQ.png';
import SANQuest from './images/Sangaku13/SQ.png';
import pedaltrianle from './images/Sangaku13/pedaltriangle.png';
import parobla from './images/Sangaku13/parabola.png';
import PAbsect from './images/Sangaku13/PAbsect.png'
import geogebra from './images/Technologies/geogebra.png'

// -------------------Magic Cubes---------------------------

import PerfectMagicCube5_850 from './images/MagicCubes/PerfectMagicCube5_850.svg';
import PerfectMagicCube5Slices_850 from './images/MagicCubes/PerfectMagicCube5Slices_850.svg';
import PerfectMagicCubeLines_950 from './images/MagicCubes/PerfectMagicCubeLines_950.svg';
import matlab from './images/Technologies/matlab.png';
import notebook from './images/MagicCubes/notebook.jpg'
import sangaku from './images/sangaku.mp4';



export const projectsInfo = [
    {
        title: "Sangaku 13",
        image: sangaku13,
        shortDescription:"While taking a college calculus course we were presented with a dificult problem \
         while learning about sequences. My teacher described the problem as being similiar to Sangaku.\
         Sankaku is the name given to the rigourous geometry problems adorned in the temples \
         of the shinto shrines during the edo period of Japan. More over Sangaku can be thought \
         of as form of meditation. My interest in these problems grew. This lead me to create my own Sankagu problem.",
         description: "While taking a college calculus course we were presented with a dificult problem \
         while learning about sequences. My teacher described the problem as being similiar to Sangaku.\
         Sankaku is the name given to the rigourous geometry problems adorned in the temples \
         of the shinto shrines during the edo period of Japan. More over Sangaku can be thought \
         of as form of meditation. My interest in these problems grew. This lead me to create my own Sankagu problem.",
        projectOverview: [
            {
                title: "The Problem", 
                image: SQ, 
                description: 
                    "Given a curve y = cos(x) \
                    and a circle with center (0, 1/2) and radius 1/2; What is the sequence that produces the Nth circle\
                    such that it is tangentally contained with-in the space created by the cos(x), y = 0, and the previous circle?"},
            {
                title: "Finding a Solution", 
                image: pedaltrianle, 
                description: 
                    "I began by first considering the idea of \
                    the incircle and its application to this particular problem. The next circle would have\
                    to be an incircle to the triangle who's vertices are formed by the intersections of three lines: \
                    the tangent line to the cos(x) at a specific point, t, for time , the tangent line to the previous \
                    circle at a specific point, a,  where both the previous circle and the next circle touch, and the \
                    line y = 0. Attempting to find an incenter to the incircle I continued further by focusing \
                    on the polygon vertices of the pedal triangle taking the incenter as the pedal point. In so doing I \
                    realized the following:"
            },
            {
                title: "Assumptions", 
                image: PAbsect, 
                description: 
                    "One vertice of the pedal triangle would have to exist at the point (t, cos(t)). \
                    The intersection of the perpendicular bisector of the tangent line to the cosine function at the point (t, cos(t)),\
                    with the angle bisector formed by the line y = 0 and the tangent line to the cosine function at the point (t, cos(t)) \
                    , will give the coordinates to the incenter."
            },
            {
                title: "Distance Formula", 
                image: parobla, 
                description: 
                    "The distance from the center of next circle to the center of previous circle minus the radial length of the previous \
                    circle must to be equivilent to radial length of the next circle."
            },
            {
                title: "", 
                image: sangaku13, 
                description: 
                    "These three realization helped me come up with a system of three equation that eventually helped me find a satisfactuary \
                    method of finding a solution."
            },

        ],
        technologies: [
            { title: "React", image: geogebra },
        ],        
        link: "https://www.geogebra.org/classic/mu5apjwb",
        video:sangaku

    },
    {
        title: "Magic Cubes",
        image: PerfectMagicCube5_850,
        shortDescription: "I became fascinated with magic cubes at one point and \
        decided to write a function file in MATLAB that maps the numbers 1 through N cubed, \
        of a given cube of order N such that N is greater than or equal to 3",
        description:"I became fascinated with magic cubes at one point and \
        decided to write a function file in MATLAB that maps the numbers 1 through N cubed, \
        of a given cube of order N such that N is greater than or equal to 3",        
        projectOverview: [
            {
                title: "What is a Magic Cube", 
                image: PerfectMagicCube5_850,
                description: 
                    "A magic cube of order N, is a 3-dimensional matrix of \
                    numbers 1 through N cubed where the sum of each row column and pillar \
                    equal the same number along with its 4 major diagonals. In other words, it is a 3-dimensional Soduko problem"
            },
            {
                title: "5 x 5 Perfect Magic Cube", 
                image: PerfectMagicCube5Slices_850, 
                description: 
                "In the example below the sum of each row column \
                and diagonal all equal 315. This number is called the Magic Constant. These squares are coss sections of each pillar from cube above."},
            {
                title: " Magic Cube's Sums", 
                image: PerfectMagicCubeLines_950, 
                description: 
                    "The lines below show the directions in which \
                    the numbers can be summed that will all equal the same number, the Magic Constant."
            },
            {
                title: "Note Book Page",
                image: notebook, 
                description: 
                " This is what my notebook looked like when trying to find a pattern \
                 I could use to program a matlab script to generate a magic cube. Looking back on it now it kinda looks like some alien language from a movie \
                like Contact with Jodie Foster"
            }
        ],
        technologies: [
            { title: "React", image: matlab },
        ],   
        link:null
        

    }

]