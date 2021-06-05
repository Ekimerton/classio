import _ from 'lodash';


export const generateSets = (courses) => {
    var sets = [];
    for (const course of courses) {
        const sections = _.filter(course.sections, section => section.timeslots.length > 0);
        const sectionGroups = _.groupBy(sections, section => section.kind);
        const courseSets = Object.values(sectionGroups);
        sets = sets.concat(courseSets);
    }
    return sets;
};

export const cartesianProduct = (sets, n = 0, result = [], current = []) => {
    if (n === sets.length) result.push(current)
    else sets[n].forEach(item => cartesianProduct(sets, n + 1, result, [...current, item]))

    return result
};

export const checkTimeslots = (timeslots) => {
    return;
};
