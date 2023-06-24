package com.nevil.Nevil.outfits;

import com.nevil.Nevil.ResourceNotFoundException;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class OutfitService {
    @Autowired
    private OutfitRepository outfitRepository;
    @Autowired
    private MongoTemplate mongoTemplate;
    public List<Outfit> allOutfit(){return outfitRepository.findAll();}

    public Outfit save(Outfit outfit) {
        outfitRepository.save(outfit);
        return outfit;

    }
    public Outfit updateLike(ObjectId id) {

        Outfit updateOutfit = outfitRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: ","id",id.toHexString()));
        updateOutfit.setLikes(updateOutfit.getLikes()+1);
        outfitRepository.save(updateOutfit);
        return updateOutfit;

    }
    public Optional<Outfit> singleOutfit(ObjectId id){
        return outfitRepository.findById(id);
    }



}
