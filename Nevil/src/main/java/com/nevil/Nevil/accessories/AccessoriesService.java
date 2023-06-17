package com.nevil.Nevil.accessories;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccessoriesService {
    @Autowired
    private AccessoriesRepository accessoriesRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Accessories> allAccessories(){return accessoriesRepository.findAll();}
    public List<Accessories> allByTypeAndColors(String type, ArrayList<String> colors) {return accessoriesRepository.findAccessoriesByTypeAndColorsContaining(type, colors);}

    public List<Accessories> allByType(String type) {return accessoriesRepository.findAccessoriesByType(type);}

}
