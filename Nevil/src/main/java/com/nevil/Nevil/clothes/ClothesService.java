package com.nevil.Nevil.clothes;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClothesService {
    @Autowired
    private ClothesRepository clothesRepository;
    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Clothes> allClothes(){
        return clothesRepository.findAll();
    }
    public List<Clothes>  clothesByCategory(String category) {return clothesRepository.findClothesByCategory(category);}

    public List<Clothes> clothesByType(String type) {return clothesRepository.findClothesByType(type);}
   }
